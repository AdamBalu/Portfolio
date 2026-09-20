'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Box } from '@mui/material';

import { Chip } from '@/components/projects/chip';
import { moreProjects } from '@/components/projects/projects';
import { SmallProjectCard } from '@/components/projects/small-project-card';
import styles from '@/components/projects/styles.module.css';

const SPRING = { type: 'spring', stiffness: 420, damping: 20 } as const;

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
				onClick={onToggle}
				whileTap={{ scale: 0.94 }}
				whileHover={{ scale: 1.02 }}
				transition={SPRING}
				className="bg-primary-lightest dark:bg-gradient-to-b dark:from-dark-card dark:to-dark-card-dark cursor-pointer hover:bg-primary-lighter dark:hover:bg-dark-hovered p-2 rounded-2xl border border-primary dark:border-none transition-colors duration-300 flex flex-col group relative h-full w-full justify-between items-center"
			>
				<span className="absolute block text-xs top-2 md:top-4 font-bold sm:opacity-0 group-hover:opacity-100 md:text-base text-slate-500">
					Other projects
				</span>
				<span className="flex h-full pt-6 items-center justify-center gap-2.5">
					{[0, 1, 2].map((dot, index) => (
						<motion.span
							key={dot}
							className="block h-2.5 w-2.5 rounded-full bg-primary-shadow dark:bg-dark-card-border"
							animate={{ y: isOpen ? -3 : 0, scale: isOpen ? 1.25 : 1 }}
							transition={{ ...SPRING, delay: index * 0.05 }}
						/>
					))}
				</span>
				<span className="self-start">
					<span className="hidden md:flex gap-2 mt-0 xs:mt-2 flex-wrap justify-start opacity-0 group-hover:opacity-100">
						<Chip color="white">
							{isOpen ? 'Hide' : `${moreProjects.length} more`}
						</Chip>
					</span>
				</span>
			</motion.button>
		</Box>
	</Box>
);

export const OtherProjectsPanel = ({ isOpen }: { isOpen: boolean }) => (
	<AnimatePresence initial={false}>
		{isOpen ? (
			<motion.div
				key="panel"
				className="overflow-hidden max-w-6xl mx-auto px-4"
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: 'auto', opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{
					height: { type: 'spring', stiffness: 190, damping: 24 },
					opacity: { duration: 0.18 }
				}}
			>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-4">
					{moreProjects.map((project, index) => (
						<motion.div
							key={project.title}
							className="h-40"
							initial={{ opacity: 0, y: 18, scale: 0.9 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								type: 'spring',
								stiffness: 320,
								damping: 20,
								delay: 0.06 + index * 0.05
							}}
						>
							<SmallProjectCard
								title={project.title}
								imgSrc={project.imgSrc}
								imgWidth={project.imgWidth}
								chipLabel={project.chipLabel}
								borderColor={project.borderColor}
								url={project.url}
							/>
						</motion.div>
					))}
				</div>
			</motion.div>
		) : null}
	</AnimatePresence>
);
