'use client';
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

import { BigProjectCard } from '@/components/projects/big-project-card';
import { UnderlinedText } from '@/components/common/underlined-text';
import {
	moreProjects,
	projects,
	smallProjects
} from '@/components/projects/projects';
import { SmallProjectCard } from '@/components/projects/small-project-card';
import { OtherProjectsTile } from '@/components/projects/other-projects';

import { card, leave, rise } from './entrance';

/* One cell of the section's 5x3 grid: 700px minus the p-4 padding and the two
   row gaps, split three ways. Pinning the row height keeps the overflow tiles
   on exactly the tracks the small project cards sit on, so the two states
   swap in place instead of reflowing. */
const CELL = 'calc((700px - 2rem - 1.5rem) / 3)';

/* The big cell only groups its four cards: they stagger in on their own and
   the cell just fades the group out on the swap. */
const group = { hidden: {}, visible: {} };

export const ProjectGrid = () => {
	const [showMore, setShowMore] = useState(false);
	const root = useRef<HTMLDivElement>(null);
	// The grid sits right under the header on desktop, so this fires on load;
	// the margin only matters for someone arriving from further down the page.
	// An `animate` label rather than whileInView, because only `animate`
	// reaches cards that mount later, when the two grids swap.
	const inView = useInView(root, { once: true, margin: '0px 0px -25% 0px' });

	// page.tsx mounts this as a flex item, which would otherwise shrink to
	// its content and narrow the grid tracks whenever fewer cards are shown.
	// Every card below inherits the reveal and pops in at its own place in
	// the stagger.
	return (
		<motion.div
			ref={root}
			className="w-full"
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
		>
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
						<motion.div className="col-span-3" variants={rise}>
							<UnderlinedText
								text="My main projects"
								subText="the ones that I am most invested in and proud of"
							/>
						</motion.div>
						<motion.div className="col-span-2 flex items-end" variants={rise}>
							<UnderlinedText
								text="Other contributions and works"
								subText="websites and apps that I built or was a part of building"
								small
							/>
						</motion.div>
					</>
				)}
			</div>

			<div
				className="grid grid-cols-5 gap-3 max-w-6xl mx-auto p-4"
				style={{ gridTemplateRows: `repeat(3, ${CELL})`, gridAutoRows: CELL }}
			>
				{/* popLayout lifts exiting cells out of flow, so the entering set
				    takes the tracks immediately instead of shuffling around them. */}
				<AnimatePresence mode="popLayout">
					{showMore
						? moreProjects.map((project, index) => (
								<motion.div
									key={`more-${project.title}`}
									className="h-full"
									variants={card}
									custom={index}
									exit={leave}
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
									variants={group}
									exit={leave}
								>
									{projects.map((project, index) => (
										<motion.div
											key={project.title}
											className="h-full"
											variants={card}
											custom={index}
										>
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
										</motion.div>
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
										variants={card}
										custom={projects.length + index}
										exit={leave}
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
				<motion.div
					style={{ gridColumn: 5, gridRow: 3 }}
					variants={card}
					custom={projects.length + smallProjects.length}
				>
					<OtherProjectsTile
						isOpen={showMore}
						onToggle={() => setShowMore(open => !open)}
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};
