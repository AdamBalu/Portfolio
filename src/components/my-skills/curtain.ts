import { type Variants } from 'framer-motion';

const POP = { type: 'spring', stiffness: 420, damping: 13 } as const;

/* Icons drop from the rod one after another and swing into place, like rings
   drawn along a curtain rail. delayChildren leaves the rod time to spring out
   first; the direction lets the two groups draw toward the middle. */
export const curtain = (fromRight: boolean): Variants => ({
	hidden: {},
	visible: {
		transition: {
			delayChildren: 0.55,
			staggerChildren: 0.07,
			staggerDirection: fromRight ? -1 : 1
		}
	}
});

export const ring: Variants = {
	hidden: { opacity: 0, y: -56, scale: 0.3, rotate: -30 },
	visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: POP }
};
