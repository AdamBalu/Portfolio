'use client';
import { motion, type Variants } from 'framer-motion';

import { currentSkills } from '@/data/current-skills';

const BOING = { type: 'spring', stiffness: 220, damping: 11 } as const;
const POP = { type: 'spring', stiffness: 420, damping: 13 } as const;

/* The arrow shaft springs down out of the tech grid and overshoots, the head
   pops on, the caption swings in beside it, then the pills bounce up in turn. */
const section: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.14 } }
};
const shaft: Variants = {
	hidden: { scaleY: 0 },
	visible: { scaleY: 1, transition: BOING }
};
const head: Variants = {
	hidden: { scale: 0, y: -20 },
	visible: { scale: 1, y: 0, transition: POP }
};
const caption: Variants = {
	hidden: { opacity: 0, x: -24, rotate: -8 },
	visible: { opacity: 1, x: 0, rotate: -2, transition: BOING }
};
const list: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } }
};
const pill: Variants = {
	hidden: { opacity: 0, y: 24, scale: 0.6, rotate: 6 },
	visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: POP }
};

export const CurrentStack = () => (
	<motion.div
		className="mx-4 mt-10 sm:mt-16 flex flex-col items-center"
		variants={section}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.4 }}
	>
		<div className="relative flex flex-col items-center">
			<motion.div
				className="w-2 h-24 sm:h-32 rounded-full bg-gradient-to-b from-[#A53DBF] to-primary"
				variants={shaft}
				style={{ originY: 0 }}
			/>
			<motion.svg
				width="56"
				height="32"
				viewBox="0 0 56 32"
				className="-mt-1 text-primary"
				variants={head}
				aria-hidden="true"
			>
				<path
					d="M4 4 L28 28 L52 4"
					fill="none"
					stroke="currentColor"
					strokeWidth="8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</motion.svg>
			<motion.p
				className="mt-3 px-2 text-center sm:absolute sm:left-8 sm:top-10 sm:mt-0 sm:px-0 sm:text-left sm:whitespace-nowrap text-sm sm:text-xl font-bold text-slate-500 dark:text-slate-300"
				variants={caption}
			>
				wait, these are probably outdated right now
			</motion.p>
		</div>
		<p className="mt-6 text-xs sm:text-base text-center">
			what I actually reach for today
		</p>
		<motion.ul
			className="mt-4 flex flex-wrap justify-center gap-3 max-w-3xl"
			variants={list}
		>
			{currentSkills.map(({ label, icon: Icon }) => (
				<motion.li
					key={label}
					className="flex items-center gap-2 rounded-full border border-primary-shadow bg-primary-lightest dark:bg-dark-card dark:border-dark-card-border px-4 py-2 text-sm sm:text-base font-semibold hover:bg-primary dark:hover:bg-dark-hovered transition-colors duration-300"
					variants={pill}
				>
					<Icon className="w-5 h-5 text-primary-shadow" aria-hidden="true" />
					{label}
				</motion.li>
			))}
		</motion.ul>
	</motion.div>
);
