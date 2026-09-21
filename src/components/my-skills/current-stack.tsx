'use client';
import { motion, useInView, type Variants } from 'framer-motion';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';

import { currentSkills } from '@/data/current-skills';
import { usePrefersReducedMotion } from '@/components/common/motion-provider';

import { useRevealSequence } from './reveal-sequence';

const BOING = { type: 'spring', stiffness: 220, damping: 11 } as const;
const POP = { type: 'spring', stiffness: 420, damping: 13 } as const;
const JOLT = { type: 'spring', stiffness: 500, damping: 14 } as const;

/* Explicit times rather than a stagger, because the caption has to read as
   "..wait.. these are probably outdated": the arrow lands, nothing happens
   for a beat, "wait," pops in alone, hangs, then the rest lands word by word. */
/* Times run from the moment the section is allowed to start, which is only
   once the icon groups above have finished dropping in. The caption is the
   thought and the funnel is its consequence, so the caption goes first:
   a beat, "wait," alone, a hang, the rest of the sentence, then the drop. */
const WAIT_AT = 0.6; // a beat to take the icons in, then "wait,"
const REST_AT = 1.2; // "wait," has hung alone for a moment
const WORD_GAP = 0.06;
const FUNNEL_AT = 1.9; // the sentence has landed; the funnel drops in answer
const FLOW_AT = 2.55; // the funnel has landed; the lines stream in
const FLOW_GAP = 0.08;
const SUBTITLE_AT = 3.0;
const PILLS_AT = 3.15;
const FALLBACK_AFTER_MS = 3500; // start anyway if the icons never report in

const REST = 'these are probably outdated right now'.split(' ');

/* After the sketch: two flaring sides with the mouth left open, a neck about
   a third of the width, and an arrowhead whose base is wider than the neck.
   OUTLINE is what gets stroked; FILL closes the mouth with a slight bow so a
   faint tint can sit inside without drawing a lid across the top. */
const OUTLINE =
	'M60 40C120 120 165 200 165 300V400H110L250 600L390 400H335V300C335 200 380 120 440 40';
const FILL = `${OUTLINE}C380 10 120 10 60 40Z`;
/* Short strokes converging into the neck: what is being drawn down. */
const FLOW_LINES = [
	'M130 60C170 90 200 120 215 150',
	'M370 60C330 90 300 120 285 150',
	'M245 40C240 90 240 130 245 170',
	'M175 140C200 170 215 200 225 240',
	'M325 140C300 170 285 200 275 240',
	'M255 200C252 240 250 280 252 330'
];

const section: Variants = { hidden: {}, visible: {} };

/* All timings scale by `beat`: 1 normally, 0 for reduced motion, where the
   pieces simply fade in with nothing to wait for. */
const makeVariants = (beat: number) => {
	const at = (seconds: number) => seconds * beat;
	const funnel: Variants = {
		hidden: { scaleY: 0 },
		visible: { scaleY: 1, transition: { ...BOING, delay: at(FUNNEL_AT) } }
	};
	const waitWord: Variants = {
		hidden: { opacity: 0, scale: 1.35, y: 4 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { ...JOLT, delay: at(WAIT_AT) }
		}
	};
	const word = (index: number): Variants => ({
		hidden: { opacity: 0, y: 6 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.22,
				ease: 'easeOut',
				delay: at(REST_AT + index * WORD_GAP)
			}
		}
	});
	const subtitle: Variants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: 'easeOut', delay: at(SUBTITLE_AT) }
		}
	};
	const list: Variants = {
		hidden: {},
		visible: {
			transition: { delayChildren: at(PILLS_AT), staggerChildren: at(0.08) }
		}
	};
	const pill: Variants = {
		hidden: { opacity: 0, y: 24, scale: 0.6, rotate: 6 },
		visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: POP }
	};
	const flowLine = (index: number): Variants => ({
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: {
				duration: 0.45,
				ease: 'easeOut',
				delay: at(FLOW_AT + index * FLOW_GAP)
			}
		}
	});
	return { funnel, waitWord, word, subtitle, list, pill, flowLine };
};

export const CurrentStack = () => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.4 });
	const { done } = useRevealSequence();
	const iconsDone = done.has('loved') && done.has('other');
	const [forced, setForced] = useState(false);

	useEffect(() => {
		if (!inView || iconsDone) return;
		const timer = window.setTimeout(() => setForced(true), FALLBACK_AFTER_MS);
		return () => window.clearTimeout(timer);
	}, [inView, iconsDone]);

	const reduceMotion = usePrefersReducedMotion();
	// With nothing moving there is nothing to wait for, so start on sight.
	const go = inView && (iconsDone || forced || reduceMotion);
	const { funnel, waitWord, word, subtitle, list, pill, flowLine } = useMemo(
		() => makeVariants(reduceMotion ? 0 : 1),
		[reduceMotion]
	);

	return (
		<motion.div
			ref={ref}
			className="mx-4 mt-10 sm:mt-16 flex flex-col items-center"
			variants={section}
			initial="hidden"
			animate={go ? 'visible' : 'hidden'}
		>
			<p className="mb-4 px-2 text-center text-base sm:text-xl font-bold text-slate-500 dark:text-slate-300">
				<motion.span className="inline-block italic" variants={waitWord}>
					wait,
				</motion.span>{' '}
				{REST.map((w, index) => (
					<Fragment key={w}>
						{index > 0 ? ' ' : null}
						<motion.span className="inline-block" variants={word(index)}>
							{w}
						</motion.span>
					</Fragment>
				))}
			</p>
			<motion.svg
				viewBox="0 0 500 620"
				className="w-full max-w-[300px] sm:max-w-[360px] h-auto"
				variants={funnel}
				style={{ originY: 0 }}
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="funnel-stroke" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="#B5E3F1" />
						<stop offset="1" stopColor="#A53DBF" />
					</linearGradient>
				</defs>
				<path d={FILL} fill="url(#funnel-stroke)" fillOpacity="0.14" />
				<path
					d={OUTLINE}
					fill="none"
					stroke="url(#funnel-stroke)"
					strokeWidth="9"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				{FLOW_LINES.map((d, index) => (
					<motion.path
						key={d}
						d={d}
						fill="none"
						stroke="#7bb3c4"
						strokeWidth="6"
						strokeLinecap="round"
						variants={flowLine(index)}
					/>
				))}
			</motion.svg>
			<motion.p
				className="mt-6 text-xs sm:text-base text-center"
				variants={subtitle}
			>
				what I actually reach for today
			</motion.p>
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
};
