'use client';

import { useRef } from 'react';

import { type ChecklistItem } from './data';
import { type Origin } from './petals';
import styles from './styles.module.css';

type ItemRowProps = {
	item: ChecklistItem;
	checked: boolean;
	onToggle: (item: ChecklistItem, origin: Origin | null) => void;
};

export const ItemRow = ({ item, checked, onToggle }: ItemRowProps) => {
	const box = useRef<HTMLSpanElement>(null);

	const handleClick = () => {
		const rect = box.current?.getBoundingClientRect();
		onToggle(
			item,
			rect
				? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
				: null
		);
	};

	return (
		<button
			type="button"
			className={styles.row}
			aria-pressed={checked}
			onClick={handleClick}
		>
			<span ref={box} className={styles.box} aria-hidden="true" />
			<span className={styles.txt}>
				<span className={styles.name}>{item.name}</span>
				{item.note ? <span className={styles.note}>{item.note}</span> : null}
			</span>
			{item.lv ? <span className={styles.lv}>{item.lv}</span> : null}
		</button>
	);
};
