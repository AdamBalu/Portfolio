'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';

type TimelinePointProps = {
	variant: 'left' | 'right';
	date: string;
	heading: string;
	text: string;
	image: React.ReactNode;
	icon: React.ReactNode;
	edgeTimeline?: boolean;
	endTimeline?: boolean;
};

const SQUISH = { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } as const;
const POP = { type: 'spring', stiffness: 520, damping: 14 } as const;
const DRAW = { duration: 0.45, ease: [0.22, 1, 0.36, 1] } as const;

/* SQUISH is a tween on purpose: a spring is declared finished anywhere inside
   its rest delta and the last sampled frame is what gets committed, which left
   the card and image a couple of pixels off their real boxes. Ease-out-back
   overshoots once — the same squish — and ends on the exact target.
   Children reveal in DOM order: the segment above draws down, the checkmark
   pops, the card slides in from its side and squashes toward the line, the
   image rises, then the segment below draws on toward the next entry. */
const entry: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.11 } }
};
const segment: Variants = {
	hidden: { scaleY: 0 },
	visible: { scaleY: 1, transition: DRAW }
};
const pop: Variants = {
	hidden: { scale: 0, rotate: -90 },
	visible: { scale: 1, rotate: 0, transition: POP }
};
const slideFrom = (side: 'left' | 'right'): Variants => ({
	hidden: { opacity: 0, x: side === 'left' ? -64 : 64, scaleX: 0.85 },
	visible: { opacity: 1, x: 0, scaleX: 1, transition: SQUISH }
});
const rise: Variants = {
	hidden: { opacity: 0, y: 28, scale: 0.6 },
	visible: { opacity: 1, y: 0, scale: 1, transition: SQUISH }
};

export const TimelinePoint = ({
	variant,
	date,
	heading,
	text,
	image,
	icon,
	edgeTimeline = false,
	endTimeline = false
}: TimelinePointProps) => {
	const isLeft = variant === 'left';

	return (
		<motion.li
			className="group"
			variants={entry}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
		>
			{!edgeTimeline && (
				<motion.hr
					className="dot-connector"
					variants={segment}
					style={{ originY: 0 }}
				/>
			)}
			<motion.div className="timeline-middle" variants={pop}>
				{icon}
			</motion.div>
			<motion.div
				className={`timeline-start md:mb-48 !ml-4 ${isLeft ? 'md:ml-0 mr-0 md:mr-6 md:text-end' : 'md:ml-6'} mt-2 w-full md:w-auto pr-6 pt-2 ${!isLeft && 'md:timeline-end'}`}
				variants={slideFrom(isLeft ? 'left' : 'right')}
				style={{ originX: isLeft ? 1 : 0 }}
			>
				<time className="text-border dark:text-primary text-xl font-bold dark:bg-dark-card rounded-md p-0.5 md:p-1">
					{date}
				</time>
				<div className="text-sm md:text-lg font-black md:mt-2">{heading}</div>
				<div className="flex flex-row gap-3 md:gap-4 items-top justify-between w-full">
					<div className="mt-1 md:mt-2 md:opacity-0 text-xs md:text-base md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out max-w-[400px] md:max-w-none">
						{text}
					</div>
					<div className="md:hidden p-2 min-w-[80px] bg-primary bg-opacity-40 rounded-md size-max min-h-[80px] flex items-center justify-center">
						{image}
					</div>
				</div>
			</motion.div>
			<motion.div
				className={`${isLeft ? 'timeline-end' : 'timeline-start'} mb-4 md:mb-48 hidden md:block !self-start`}
				variants={rise}
			>
				<div
					className={`p-4 ${isLeft ? 'ml-6' : 'mr-6'} group-hover:shadow-[0_0_25px_25px_#fff] dark:group-hover:shadow-[0_0_15px_15px_#192C65] rounded-xl transition-all duration-300 ease-in-out mt-[-20%]`}
				>
					{image}
				</div>
			</motion.div>
			{!endTimeline && (
				<motion.hr
					className="connector"
					variants={segment}
					style={{ originY: 0 }}
				/>
			)}
		</motion.li>
	);
};
