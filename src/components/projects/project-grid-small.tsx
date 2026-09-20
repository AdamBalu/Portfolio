'use client';
import { useState } from 'react';
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

const SWAP = { type: 'spring', stiffness: 260, damping: 28 } as const;

const CELL =
	'w-[48%] min-[430px]:w-[calc(33.333%-10px)] h-[130px] md:h-[180px]';

export const ProjectGridSmall = () => {
	const [showMore, setShowMore] = useState(false);
	const toggle = () => setShowMore(open => !open);

	// page.tsx mounts this as a flex item, which would otherwise shrink to
	// its content and narrow the grid tracks whenever fewer cards are shown.
	return (
		<div className="w-full">
			{/* No layout animation here: it tweens the wrapper's height with a scale
			    transform, which visibly squashes the cards while it runs. */}
			<div className="max-w-6xl mx-auto p-4">
				<AnimatePresence mode="wait" initial={false}>
					{showMore ? (
						<motion.div
							key="more"
							initial={{ opacity: 0, x: 24 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -24 }}
							transition={SWAP}
						>
							<UnderlinedText
								text="Other projects"
								subText="smaller things I built along the way"
								className="ml-1 sm:ml-1 mt-12 mb-4"
							/>

							<div className="flex flex-wrap gap-3 justify-center mt-2 sm:mt-8">
								{moreProjects.map(project => (
									<div key={project.title} className={CELL}>
										<SmallProjectCard
											title={project.title}
											imgSrc={project.imgSrc}
											imgWidth={project.imgWidth}
											chipLabel={project.chipLabel}
											borderColor={project.borderColor}
											url={project.url}
										/>
									</div>
								))}
								<div className={CELL}>
									<OtherProjectsTile isOpen onToggle={toggle} />
								</div>
							</div>
						</motion.div>
					) : (
						<motion.div
							key="main"
							initial={{ opacity: 0, x: -24 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 24 }}
							transition={SWAP}
						>
							<UnderlinedText
								text="My main projects"
								subText="the ones that I am most invested in and proud of"
								className="ml-1 sm:ml-1 mt-12 mb-4"
							/>

							<div className="flex flex-col gap-2 sm:gap-4 mb-6 sm:mb-16 mt-2 sm:mt-6">
								{projects.map((project, index) => (
									<BigProjectCard
										key={index}
										title={project.title}
										description={project.description}
										chipColor={project.chipColor}
										borderColor={project.borderColor}
										chipLabels={project.chipLabels}
										imgSrc={project.imgSrc}
										imgWidth={project.imgWidth}
										url={project.url}
									/>
								))}
							</div>

							<UnderlinedText
								text="Other contributions and works"
								subText="websites and apps that I built or was a part of building"
								small
								className="px-2 sm:max-w-none mx-0 mt-12 mb-4"
							/>

							<div className="flex flex-wrap gap-3 justify-center mt-2 sm:mt-8">
								{smallProjects.map(project => (
									<div key={project.title} className={CELL}>
										<SmallProjectCard
											title={project.title}
											imgSrc={project.imgSrc}
											imgWidth={project.imgWidth}
											chipLabel={project.chipLabel}
											borderColor={project.borderColor}
											url={project.url}
										/>
									</div>
								))}
								<div className={CELL}>
									<OtherProjectsTile isOpen={false} onToggle={toggle} />
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};
