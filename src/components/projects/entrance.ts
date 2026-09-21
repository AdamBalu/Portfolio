import { type Variants } from 'framer-motion';

/* Entrance for the projects section: the first thing on the page, so it has
   to be quick. Back-out tweens land exactly on the target (no residual
   transform) and the whole grid is settled in about a second. */
const POP = { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } as const;
const STEP = 0.06;

/* `custom` is the card's place in the stagger. On the swap between the two
   grids the same variants play again for the entering cards. */
export const card: Variants = {
	hidden: { opacity: 0, y: 28, scale: 0.94 },
	visible: (order: number = 0) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { ...POP, delay: order * STEP }
	})
};

/* Passed as a target rather than a variant label: a label on `exit` would
   make the cell a controlling node and cut its children off from the
   inherited reveal. */
export const leave = {
	opacity: 0,
	scale: 0.86,
	transition: { duration: 0.18, ease: 'easeIn' }
} as const;

export const rise: Variants = {
	hidden: { opacity: 0, y: 14 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

/* Picked up by the underline inside UnderlinedText through variant inheritance. */
export const underline: Variants = {
	hidden: { scaleX: 0 },
	visible: {
		scaleX: 1,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
	}
};
