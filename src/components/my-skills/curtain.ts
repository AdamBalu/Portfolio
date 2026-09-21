import { type Variants } from 'framer-motion';

/* A back-out tween rather than a spring: it overshoots the same way but ends
   exactly on the target, so the icon is left with no transform at all. A
   spring's residual rotate would tilt the hover card and keep a stacking
   context that traps it under the icons that follow. */
const POP = { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } as const;

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
