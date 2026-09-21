'use client';
import { motion, type Variants } from 'framer-motion';

const SLIDE = { type: 'spring', stiffness: 260, damping: 18 } as const;
// Low damping so the bar overshoots its full width before settling — the squish.
const ROD = { type: 'spring', stiffness: 140, damping: 12 } as const;

const heading: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } }
};
const fromLeft: Variants = {
	hidden: { opacity: 0, x: -40 },
	visible: { opacity: 1, x: 0, transition: SLIDE }
};
const fromRight: Variants = {
	hidden: { opacity: 0, x: 40 },
	visible: { opacity: 1, x: 0, transition: SLIDE }
};
const rod: Variants = {
	hidden: { scaleX: 0 },
	visible: { scaleX: 1, transition: ROD }
};
const shine: Variants = {
	hidden: { x: '-120%' },
	visible: {
		x: '400%',
		transition: { duration: 0.9, ease: 'easeInOut', delay: 0.4 }
	}
};
const rise: Variants = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: SLIDE }
};

export const SkillsHeading = () => (
	<motion.div
		className="flex flex-col items-center justify-center mx-4"
		variants={heading}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.6 }}
	>
		<div className="flex justify-between items-end w-full gap-6">
			<motion.h1
				className="text-xs sm:text-2xl font-bold mb-1"
				variants={fromLeft}
			>
				My favorite tech
			</motion.h1>
			<motion.h1
				className="text-xs sm:text-2xl font-bold text-end mb-1"
				variants={fromRight}
			>
				Other ones I tried
			</motion.h1>
		</div>
		{/* The rod springs out from the left and overshoots; the wrapper clips that
		    overshoot at the container edge so a full-width bar never widens the
		    page — it reads as the rod bouncing off its end stop. Then a shine runs
		    its length. */}
		<div className="w-full overflow-x-clip">
			<motion.div
				className="relative overflow-hidden p-px bg-gradient-to-r from-primary to-[#A53DBF] h-2 w-full"
				variants={rod}
				style={{ originX: 0 }}
			>
				<motion.div
					aria-hidden="true"
					className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/90 to-transparent"
					variants={shine}
				/>
			</motion.div>
		</div>
		<div className="flex justify-between items-center gap-8 w-full">
			<motion.p className="text-xs sm:text-base" variants={rise}>
				these which I love and I’m quite good at
			</motion.p>
			<motion.p className="text-xs sm:text-base text-end" variants={rise}>
				and which I learned along the way
			</motion.p>
		</div>
	</motion.div>
);
