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

export const ProjectGrid = () => {
	const [showMore, setShowMore] = useState(false);
	const toggle = () => setShowMore(open => !open);

	return (
		<div>
			<div
				className="grid grid-cols-5 max-w-6xl mx-auto p-1 px-4 gap-3 scroll-m-24"
				id="projects"
			>
				{showMore ? (
					<div className="col-span-5">
						<UnderlinedText
							text="Other projects"
							subText="smaller things I built along the way"
						/>
					</div>
				) : (
					<>
						<div className="col-span-3">
							<UnderlinedText
								text="My main projects"
								subText="the ones that I am most invested in and proud of"
							/>
						</div>
						<div className="col-span-2 flex items-end">
							<UnderlinedText
								text="Other contributions and works"
								subText="websites and apps that I built or was a part of building"
								small
							/>
						</div>
					</>
				)}
			</div>

			{/* layout animates the height change, since the overflow grid is only as
			    tall as the square tiles it holds. */}
			<motion.div layout className="max-w-6xl mx-auto p-4" transition={SWAP}>
				<AnimatePresence mode="wait" initial={false}>
					{showMore ? (
						<motion.div
							key="more"
							className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
							initial={{ opacity: 0, x: 32 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -32 }}
							transition={SWAP}
						>
							{moreProjects.map(project => (
								<div key={project.title} className="aspect-square">
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
							<div className="aspect-square">
								<OtherProjectsTile isOpen onToggle={toggle} />
							</div>
						</motion.div>
					) : (
						<motion.div
							key="main"
							className="grid grid-cols-5 gap-3 h-[700px]"
							initial={{ opacity: 0, x: -32 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 32 }}
							transition={SWAP}
						>
							<div className="col-span-3 grid grid-cols-2 grid-rows-2 gap-3 h-full">
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

							{/* grid-flow-col fills column-major, so the tile keeps the
							    bottom-right corner it had before. */}
							<div className="col-span-2 grid grid-cols-2 grid-rows-3 grid-flow-col gap-3 h-full">
								{smallProjects.map(project => (
									<SmallProjectCard
										key={project.title}
										title={project.title}
										imgSrc={project.imgSrc}
										imgWidth={project.imgWidth}
										chipLabel={project.chipLabel}
										borderColor={project.borderColor}
										url={project.url}
									/>
								))}
								<div className="col-start-2 row-start-3">
									<OtherProjectsTile isOpen={false} onToggle={toggle} />
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
