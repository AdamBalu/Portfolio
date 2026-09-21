'use client';
import { motion, useInView, type Variants } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

import { card } from './entrance';

type RevealProps = {
	children: ReactNode;
	className?: string;
	variants?: Variants;
	/* Place in the stagger, when the variants take one. */
	order?: number;
};

/* Reveals its content once it scrolls well into view. Driven by useInView
   and an `animate` label rather than whileInView: elements mounted by the
   grid swap while already on screen were missing whileInView's first
   notification and stayed hidden until they left and re-entered the screen.
   The bottom margin keeps a card hidden until it is properly inside the
   screen rather than a pixel in. */
export const Reveal = ({
	children,
	className,
	variants = card,
	order = 0
}: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });

	return (
		<motion.div
			ref={ref}
			className={className}
			variants={variants}
			custom={order}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
		>
			{children}
		</motion.div>
	);
};
