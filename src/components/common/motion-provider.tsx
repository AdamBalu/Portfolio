'use client';
import { MotionConfig } from 'framer-motion';
import { useSyncExternalStore, type ReactNode } from 'react';

// One place for the scroll-reveal sections to honour prefers-reduced-motion.
export const MotionProvider = ({ children }: { children: ReactNode }) => (
	<MotionConfig reducedMotion="user">{children}</MotionConfig>
);

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';
const subscribe = (onChange: () => void) => {
	const query = window.matchMedia(REDUCE_QUERY);
	query.addEventListener('change', onChange);
	return () => query.removeEventListener('change', onChange);
};

// Read directly from the media query: false in the server snapshot, so the
// markup hydrates identically, then the user's real preference.
export const usePrefersReducedMotion = () =>
	useSyncExternalStore(
		subscribe,
		() => window.matchMedia(REDUCE_QUERY).matches,
		() => false
	);
