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

const SPRING = { type: 'spring', stiffness: 320, damping: 26 } as const;

/* One cell of the section's 5x3 grid: 700px minus the p-4 padding and the two
   row gaps, split three ways. Pinning the row height keeps the overflow tiles
   on exactly the tracks the small project cards sit on, so the two states
   swap in place instead of reflowing. */
const CELL = 'calc((700px - 2rem - 1.5rem) / 3)';

const cell = (delay: number) => ({
	initial: { opacity: 0, scale: 0.86 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.86 },
	transition: { ...SPRING, delay }
});

export const ProjectGrid = () => {
	const [showMore, setShowMore] = useState(false);

	// page.tsx mounts this as a flex item, which would otherwise shrink to
	// its content and narrow the grid tracks whenever fewer cards are shown.
	return (
		<div className="w-full">
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

			<div
				className="grid grid-cols-5 gap-3 max-w-6xl mx-auto p-4"
				style={{ gridTemplateRows: `repeat(3, ${CELL})`, gridAutoRows: CELL }}
			>
				{/* popLayout lifts exiting cells out of flow, so the entering set
				    takes the tracks immediately instead of shuffling around them. */}
				<AnimatePresence mode="popLayout" initial={false}>
					{showMore
						? moreProjects.map((project, index) => (
								<motion.div
									key={`more-${project.title}`}
									className="h-full"
									{...cell(index * 0.04)}
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
							))
						: [
								<motion.div
									key="big"
									className="col-span-3 row-span-3 grid grid-cols-2 grid-rows-2 gap-3 h-full"
									{...cell(0)}
								>
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
								</motion.div>,
								...smallProjects.map((project, index) => (
									// Column-major into columns 4-5, leaving column 5 / row 3
									// for the tile.
									<motion.div
										key={`main-${project.title}`}
										className="h-full"
										style={{
											gridColumn: 4 + Math.floor(index / 3),
											gridRow: 1 + (index % 3)
										}}
										{...cell(index * 0.04)}
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
								))
							]}
				</AnimatePresence>

				{/* Outside AnimatePresence and placed explicitly, so it is the same
				    element in both states and stays in its corner while the rest of
				    the grid swaps around it. */}
				<div style={{ gridColumn: 5, gridRow: 3 }}>
					<OtherProjectsTile
						isOpen={showMore}
						onToggle={() => setShowMore(open => !open)}
					/>
				</div>
			</div>
		</div>
	);
};
