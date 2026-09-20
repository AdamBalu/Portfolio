import { type CSSProperties } from 'react';

export type Petal = {
	id: number;
	style: CSSProperties;
};

export type Origin = {
	x: number;
	y: number;
};

export type PetalOptions = {
	dir?: 'up' | 'down';
	dxMin?: number;
	dxMax?: number;
	goldChance?: number;
};

const COLORS = ['#cf3a2e', '#cf3a2e', '#a52a21', '#e65a49', '#8f231b'];
const GOLD = '#d4ad3f';

export const MAX_PETALS = 90;

export const makePetals = (
	cx: number,
	cy: number,
	count: number,
	options: PetalOptions = {}
): CSSProperties[] => {
	const { dir = 'up', dxMin = -24, dxMax = 84, goldChance = 0.1 } = options;

	return Array.from({ length: count }, () => {
		const size = 5 + Math.random() * 5;
		const up = dir === 'up';

		return {
			'left': `${cx + (Math.random() * 14 - 7)}px`,
			'top': `${cy + (Math.random() * 10 - 5)}px`,
			'width': `${size}px`,
			'height': `${size * 0.72}px`,
			'background':
				Math.random() < goldChance
					? GOLD
					: COLORS[Math.floor(Math.random() * COLORS.length)],
			'--dx': `${dxMin + Math.random() * (dxMax - dxMin)}px`,
			'--dy': up
				? `${-(38 + Math.random() * 110)}px`
				: `${140 + Math.random() * 230}px`,
			'--rot': `${Math.round(Math.random() * 280 - 140)}deg`,
			'--dur': up
				? `${0.7 + Math.random() * 0.5}s`
				: `${1.3 + Math.random() * 0.9}s`
		} as CSSProperties;
	});
};
