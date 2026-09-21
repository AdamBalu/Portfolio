'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Box } from '@mui/material';

import { Chip } from '@/components/projects/chip';
import { moreProjects } from '@/components/projects/projects';
import styles from '@/components/projects/styles.module.css';

const SPRING = { type: 'spring', stiffness: 420, damping: 20 } as const;

/* Variants rather than inline props, so hovering the tile propagates down to
   the dots and the arrow instead of only scaling the button. */
/* The rotating border glow sits *behind* the tile and only shows around a
   tile smaller than its frame — SmallProjectCard sits at scale-[0.98] for the
   same reason. Resting at 1 covered it, so it only appeared while pressed. */
const tileVariants = {
	rest: { scale: 0.98 },
	open: { scale: 0.98 },
	hover: { scale: 0.98 },
	tap: { scale: 0.94 }
};

const dotVariants = {
	rest: { y: 0, scale: 1 },
	open: { y: 0, scale: 1 },
	hover: { y: -4, scale: 1.35 }
};

const arrowVariants = {
	rest: { x: 0 },
	open: { x: 0 },
	hover: { x: -4 }
};

type OtherProjectsTileProps = {
	isOpen: boolean;
	onToggle: () => void;
};

export const OtherProjectsTile = ({
	isOpen,
	onToggle
}: OtherProjectsTileProps) => (
	<Box className="rounded-2xl transition-all duration-100 dark:hover:shadow-[0_0_15px_15px_#192C65] dark:border border-dark-card-border hover:border-transparent h-full">
		{/* .cardHoverBorderEffect centres its grid child, so the tile needs w-full. */}
		<Box className={styles.cardHoverBorderEffect}>
			<motion.button
				type="button"
				aria-expanded={isOpen}
				aria-label={isOpen ? 'Back to main projects' : 'Show other projects'}
				onClick={onToggle}
				initial={false}
				animate={isOpen ? 'open' : 'rest'}
				whileHover="hover"
				whileTap="tap"
				variants={tileVariants}
				transition={SPRING}
				className="bg-primary-lightest dark:bg-gradient-to-b dark:from-dark-card dark:to-dark-card-dark cursor-pointer hover:bg-primary-lighter dark:hover:bg-dark-hovered p-2 rounded-2xl border border-primary dark:border-none transition-colors duration-300 flex flex-col group relative h-full w-full justify-between items-center"
			>
				<span className="absolute block text-xs top-2 md:top-4 font-bold sm:opacity-0 group-hover:opacity-100 md:text-base text-slate-500">
					{isOpen ? 'Back' : 'Other projects'}
				</span>

				<span className="flex h-full pt-6 items-center justify-center gap-2.5">
					<AnimatePresence mode="wait" initial={false}>
						{isOpen ? (
							<motion.span
								key="arrow"
								variants={arrowVariants}
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								transition={SPRING}
								className="flex text-primary-shadow dark:text-dark-card-border"
							>
								<svg
									width="34"
									height="34"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M19 12H5" />
									<path d="m12 19-7-7 7-7" />
								</svg>
							</motion.span>
						) : (
							/* One presence child, as mode="wait" expects; the dots inside
							   still answer the tile's hover on their own. */
							<motion.span
								key="dots"
								className="flex gap-2.5"
								initial={{ opacity: 0, scale: 0.4 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.4 }}
								transition={SPRING}
							>
								{[0, 1, 2].map((dot, index) => (
									<motion.span
										key={dot}
										className="block h-2.5 w-2.5 rounded-full bg-primary-shadow dark:bg-dark-card-border"
										variants={dotVariants}
										transition={{ ...SPRING, delay: index * 0.05 }}
									/>
								))}
							</motion.span>
						)}
					</AnimatePresence>
				</span>

				<span className="self-start">
					<span className="hidden md:flex gap-2 mt-0 xs:mt-2 flex-wrap justify-start opacity-0 group-hover:opacity-100">
						<Chip color="white">
							{isOpen ? 'Back to projects' : `${moreProjects.length} more`}
						</Chip>
					</span>
				</span>
			</motion.button>
		</Box>
	</Box>
);
