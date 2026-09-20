import { ALL_IDS, CATEGORIES } from './data';

const KEY = 'e33-areas-v1';

export type SavedState = {
	checked: Set<string>;
	collapsed: Set<string>;
	openCategories: Set<string>;
};

const asIdSet = (value: unknown) =>
	new Set(
		Array.isArray(value)
			? value.filter((id): id is string => typeof id === 'string')
			: []
	);

export type SaveResult =
	| { ok: true }
	| { ok: false; reason: 'unavailable' | 'unverified' | string };

/**
 * Private mode and blocked site data can make even *reading* window.localStorage
 * throw, so every access goes through here.
 */
const store = () => {
	try {
		return window.localStorage;
	} catch {
		return null;
	}
};

export const readState = (): SavedState | null => {
	const local = store();
	if (!local) return null;

	try {
		const raw = local.getItem(KEY);
		if (!raw) {
			return {
				checked: new Set(),
				collapsed: new Set(),
				openCategories: new Set([CATEGORIES[0].id])
			};
		}

		const parsed: unknown = JSON.parse(raw);
		if (typeof parsed !== 'object' || parsed === null) return null;

		const { checked, collapsed, openCategories } = parsed as {
			checked?: unknown;
			collapsed?: unknown;
			openCategories?: unknown;
		};

		return {
			checked: new Set(
				Array.isArray(checked)
					? checked.filter(
							(id): id is string => typeof id === 'string' && ALL_IDS.has(id)
						)
					: []
			),
			collapsed: asIdSet(collapsed),
			// Saves written before categories existed open the first one.
			openCategories: Array.isArray(openCategories)
				? asIdSet(openCategories)
				: new Set([CATEGORIES[0].id])
		};
	} catch {
		// First visit, or a payload we can no longer read — start fresh.
		return {
			checked: new Set(),
			collapsed: new Set(),
			openCategories: new Set([CATEGORIES[0].id])
		};
	}
};

export const writeState = (state: SavedState): SaveResult => {
	const local = store();
	if (!local) return { ok: false, reason: 'unavailable' };

	const payload = JSON.stringify({
		checked: [...state.checked],
		collapsed: [...state.collapsed],
		openCategories: [...state.openCategories]
	});

	try {
		local.setItem(KEY, payload);
		// Quota-pressure eviction can drop a write that did not throw.
		if (local.getItem(KEY) !== payload)
			return { ok: false, reason: 'unverified' };
		return { ok: true };
	} catch (error) {
		const detail =
			error instanceof Error ? error.message.slice(0, 80) : 'unknown error';
		return { ok: false, reason: detail };
	}
};
