'use client';
import { MotionConfig } from 'framer-motion';
import { type ReactNode } from 'react';

// One place for the scroll-reveal sections to honour prefers-reduced-motion.
export const MotionProvider = ({ children }: { children: ReactNode }) => (
	<MotionConfig reducedMotion="user">{children}</MotionConfig>
);
