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
   once the icon groups above have finished dropping in. */
const FUNNEL_AT = 0.6; // a beat to take the icons in before the funnel drops
const WAIT_AT = 1.8; // the funnel settled around 1.3s; nothing happens, then this
const REST_AT = 2.4; // "wait," has hung alone for a moment
const WORD_GAP = 0.06;
const SUBTITLE_AT = 2.95;
const PILLS_AT = 3.1;
const FALLBACK_AFTER_MS = 3500; // start anyway if the icons never report in

const REST = 'these are probably outdated right now'.split(' ');

/* Wide mouth spanning both icon groups, sides sweeping in to a neck, then the
   arrowhead: the classic stack pouring into what comes after it. */
const FUNNEL_PATH =
	'M0 0H1000C1000 70 570 60 545 120V150H600L500 210L400 150H455V120C430 60 0 70 0 0Z';

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
	return { funnel, waitWord, word, subtitle, list, pill };
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
	const { funnel, waitWord, word, subtitle, list, pill } = useMemo(
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
			<motion.svg
				viewBox="0 0 1000 220"
				className="w-full max-w-[1100px] h-auto"
				variants={funnel}
				style={{ originY: 0 }}
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="funnel-fill" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="#B5E3F1" stopOpacity="0.55" />
						<stop offset="1" stopColor="#A53DBF" stopOpacity="0.7" />
					</linearGradient>
					<linearGradient id="funnel-flow" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="#fff" stopOpacity="0" />
						<stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
						<stop offset="1" stopColor="#fff" stopOpacity="0" />
					</linearGradient>
					<clipPath id="funnel-clip">
						<path d={FUNNEL_PATH} />
					</clipPath>
				</defs>
				<path
					d={FUNNEL_PATH}
					fill="url(#funnel-fill)"
					stroke="#7bb3c4"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
				{/* A soft band of light drifting down through the funnel, with a long
				    pause between passes; skipped for reduced-motion users. */}
				{reduceMotion ? null : (
					<motion.rect
						x="0"
						width="1000"
						height="70"
						fill="url(#funnel-flow)"
						clipPath="url(#funnel-clip)"
						initial={{ y: -70 }}
						animate={go ? { y: 220 } : { y: -70 }}
						transition={{
							duration: 1.4,
							ease: 'easeInOut',
							delay: FUNNEL_AT + 0.9,
							repeat: Infinity,
							repeatDelay: 2.4
						}}
					/>
				)}
			</motion.svg>
			<p className="mt-4 px-2 text-center text-base sm:text-xl font-bold text-slate-500 dark:text-slate-300">
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
