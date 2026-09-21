'use client';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { BigProjectCard } from '@/components/projects/big-project-card';
import { UnderlinedText } from '@/components/common/underlined-text';
import {
	moreProjects,
	projects,
	smallProjects
} from '@/components/projects/projects';
import { SmallProjectCard } from '@/components/projects/small-project-card';
import { OtherProjectsTile } from '@/components/projects/other-projects';

import { rise } from './entrance';
import { Reveal } from './reveal';

const SWAP = { type: 'spring', stiffness: 260, damping: 28 } as const;

const CELL =
	'w-[48%] min-[430px]:w-[calc(33.333%-10px)] h-[130px] md:h-[180px]';

/* Small cards sit three to a row, so the stagger restarts on every row and a
   row that scrolls into view pops in together, left to right. */
const ROW = 3;

export const ProjectGridSmall = () => {
	const [showMore, setShowMore] = useState(false);
	// The panels slide only when swapping; on first paint the cards do the
	// entrance themselves, each as it scrolls into view.
	const [swapped, setSwapped] = useState(false);
	const panel = useRef<HTMLDivElement>(null);
	// The two panels differ a lot in height, so after a swap the page would be
	// left scrolled somewhere below the new one. Bring its top back on screen;
	// the cards then reveal as they come into view.
	const toggle = () => {
		setSwapped(true);
		setShowMore(open => !open);
		panel.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	const slideFrom = (x: number) => (swapped ? { opacity: 0, x } : false);

	// page.tsx mounts this as a flex item, which would otherwise shrink to
	// its content and narrow the grid tracks whenever fewer cards are shown.
	return (
		<div className="w-full">
			{/* No layout animation here: it tweens the wrapper's height with a scale
			    transform, which visibly squashes the cards while it runs. */}
			<div ref={panel} className="max-w-6xl mx-auto p-4 scroll-mt-16">
				<AnimatePresence mode="wait">
					{showMore ? (
						<motion.div
							key="more"
							initial={slideFrom(24)}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -24 }}
							transition={SWAP}
						>
							<Reveal variants={rise}>
								<UnderlinedText
									text="Other projects"
									subText="smaller things I built along the way"
									className="ml-1 sm:ml-1 mt-12 mb-4"
								/>
							</Reveal>

							<div className="flex flex-wrap gap-3 justify-center mt-2 sm:mt-8">
								{moreProjects.map((project, index) => (
									<Reveal
										key={project.title}
										className={CELL}
										order={index % ROW}
									>
										<SmallProjectCard
											title={project.title}
											imgSrc={project.imgSrc}
											imgWidth={project.imgWidth}
											chipLabel={project.chipLabel}
											borderColor={project.borderColor}
											url={project.url}
										/>
									</Reveal>
								))}
								<Reveal className={CELL} order={moreProjects.length % ROW}>
									<OtherProjectsTile isOpen onToggle={toggle} />
								</Reveal>
							</div>
						</motion.div>
					) : (
						<motion.div
							key="main"
							initial={slideFrom(-24)}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 24 }}
							transition={SWAP}
						>
							<Reveal variants={rise}>
								<UnderlinedText
									text="My main projects"
									subText="the ones that I am most invested in and proud of"
									className="ml-1 sm:ml-1 mt-12 mb-4"
								/>
							</Reveal>

							<div className="flex flex-col gap-2 sm:gap-4 mb-6 sm:mb-16 mt-2 sm:mt-6">
								{projects.map(project => (
									<Reveal key={project.title}>
										<BigProjectCard
											title={project.title}
											description={project.description}
											chipColor={project.chipColor}
											borderColor={project.borderColor}
											chipLabels={project.chipLabels}
											imgSrc={project.imgSrc}
											imgWidth={project.imgWidth}
											url={project.url}
										/>
									</Reveal>
								))}
							</div>

							<Reveal variants={rise}>
								<UnderlinedText
									text="Other contributions and works"
									subText="websites and apps that I built or was a part of building"
									small
									className="px-2 sm:max-w-none mx-0 mt-12 mb-4"
								/>
							</Reveal>

							<div className="flex flex-wrap gap-3 justify-center mt-2 sm:mt-8">
								{smallProjects.map((project, index) => (
									<Reveal
										key={project.title}
										className={CELL}
										order={index % ROW}
									>
										<SmallProjectCard
											title={project.title}
											imgSrc={project.imgSrc}
											imgWidth={project.imgWidth}
											chipLabel={project.chipLabel}
											borderColor={project.borderColor}
											url={project.url}
										/>
									</Reveal>
								))}
								<Reveal className={CELL} order={smallProjects.length % ROW}>
									<OtherProjectsTile isOpen={false} onToggle={toggle} />
								</Reveal>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};
