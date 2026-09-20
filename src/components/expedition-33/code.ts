/**
 * Frozen id order from the first release of this checklist. Save codes are a
 * bitfield over this array, so ids may only ever be appended — reordering or
 * removing one silently decodes every existing code wrong.
 */
const CODE_ORDER = [
	'lumiere',
	'spring-meadows',
	'flying-waters',
	'ancient-sanctuary',
	'gestral-village',
	'stone-wave-cliffs',
	'hidden-gestral-arena',
	'yellow-harvest',
	'swc-cave',
	'abbest-cave',
	'red-woods',
	'forgotten-battlefield',
	'mon-station',
	'old-x',
	'visages',
	'sirene',
	'monolith',
	'crushing-cavern',
	'esoteric-ruins',
	'stone-quarry',
	'carousel',
	'coastal-cave',
	'sinister-cave',
	'falling-leaves',
	'crimson-forest',
	'floating-cemetery',
	'the-crows',
	'isle-of-the-eyes',
	'sacred-river',
	'act3-main',
	'sirenes-dress',
	'reacher',
	'endless-night-sanctuary',
	'white-sands',
	'frozen-hearts',
	'chosen-path',
	'sky-island',
	'dark-shores',
	'endless-tower',
	'dark-gestral-arena',
	'fountain',
	'flying-manor',
	'painting-workshop',
	'sunless-cliffs',
	'ver-drafts',
	'ren-drafts',
	'monolith-peak',
	'blades-graveyard',
	'boat-graveyard',
	'ancient-gestral-city',
	'twilight-quarry',
	'lost-woods',
	'gestral-beaches',
	'white-tree',
	'the-meadows',
	'flying-casino',
	'small-bourgeon',
	// Appended later — never reorder anything above this line.
	'nq-jar',
	'nq-demineur',
	'nq-bourgeon',
	'nq-hexga',
	'nq-benisseur',
	'nq-troubadour',
	'nq-portier',
	'nq-danseuse',
	'nq-chalier',
	'nq-blanche',
	'col-gestrals',
	'col-journals',
	'col-records',
	'col-monoco',
	'col-gestralgames',
	'col-relationships',
	'ms-mime',
	'ms-oldkey',
	'ms-piano',
	'ms-maelle7',
	'ms-arena',
	'ms-prologue-fits',
	'nq-grandis'
];

// BigInt literals (0n) need an ES2020 target; this project compiles to ES2017.
const ZERO = BigInt(0);
const ONE = BigInt(1);
const BASE = BigInt(36);

export const toCode = (checked: ReadonlySet<string>) => {
	let bits = ZERO;
	CODE_ORDER.forEach((id, index) => {
		if (checked.has(id)) bits |= ONE << BigInt(index);
	});
	return `E33-${bits.toString(36)}`;
};

export const fromCode = (raw: string) => {
	const match = /^E33-([0-9a-z]+)$/i.exec(raw.trim());
	if (!match) return null;

	let bits = ZERO;
	for (const char of match[1].toLowerCase()) {
		const digit = parseInt(char, 36);
		if (Number.isNaN(digit)) return null;
		bits = bits * BASE + BigInt(digit);
	}

	const restored = new Set<string>();
	CODE_ORDER.forEach((id, index) => {
		if (((bits >> BigInt(index)) & ONE) === ONE) restored.add(id);
	});
	return restored;
};
