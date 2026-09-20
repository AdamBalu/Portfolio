'use client';

import {
	countDone,
	groupItems,
	type ChecklistGroup,
	type ChecklistItem
} from './data';
import { type Origin } from './petals';
import { ItemRow } from './item-row';
import styles from './styles.module.css';

type GroupBlockProps = {
	group: ChecklistGroup;
	checked: ReadonlySet<string>;
	collapsed: boolean;
	sheenNonce: number | null;
	/** Off when the group is the only one in its category — the category button
	 *  above it already carries the same title, count and progress. */
	showHeading: boolean;
	onToggleCollapse: (groupId: string) => void;
	onToggleItem: (
		item: ChecklistItem,
		groupId: string,
		origin: Origin | null
	) => void;
	onBulk: (groupId: string, items: ChecklistItem[], turningOn: boolean) => void;
};

export const GroupBlock = ({
	group,
	checked,
	collapsed,
	sheenNonce,
	showHeading,
	onToggleCollapse,
	onToggleItem,
	onBulk
}: GroupBlockProps) => {
	const items = groupItems(group);
	const done = countDone(items, checked);
	const complete = done === items.length;

	return (
		<section className={styles.group}>
			{showHeading ? (
				<>
					<button
						type="button"
						className={styles.groupHead}
						data-e33-group={group.id}
						aria-expanded={!collapsed}
						onClick={() => onToggleCollapse(group.id)}
					>
						<h2 className={styles.groupHeading}>
							{group.title}
							<span className={styles.groupCaption}>{group.caption}</span>
						</h2>
						<span className={styles.groupMeta}>
							{complete ? (
								<span className={styles.seal} aria-label="Group complete" />
							) : (
								<span className={styles.groupCount}>
									{done} / {items.length}
								</span>
							)}
							<span
								className={`${styles.chevron} ${collapsed ? styles.chevronCollapsed : ''}`}
								aria-hidden="true"
							/>
						</span>
					</button>

					<div className={styles.secTrack}>
						<div
							className={`${styles.secFill} ${complete ? styles.secFillDone : ''}`}
							style={{ width: `${(done / items.length) * 100}%` }}
						>
							{sheenNonce === null ? null : (
								<span key={sheenNonce} className={styles.sheen} />
							)}
						</div>
					</div>
				</>
			) : null}

			{showHeading && collapsed
				? null
				: group.sections.map(section => {
						const sectionDone = countDone(section.items, checked);
						const allOn = sectionDone === section.items.length;

						return (
							<div key={section.sub ?? group.id}>
								<div className={styles.sectionHead}>
									<span className={styles.sectionSub}>{section.sub ?? ''}</span>
									<button
										type="button"
										className={styles.bulk}
										onClick={() => onBulk(group.id, section.items, !allOn)}
									>
										{allOn ? 'untick all' : 'tick all'}
									</button>
								</div>
								{section.items.map(item => (
									<ItemRow
										key={item.id}
										item={item}
										checked={checked.has(item.id)}
										onToggle={(target, origin) =>
											onToggleItem(target, group.id, origin)
										}
									/>
								))}
							</div>
						);
					})}
		</section>
	);
};
