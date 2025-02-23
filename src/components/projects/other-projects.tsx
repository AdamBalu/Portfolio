import { SquareArrowOutUpRight } from 'lucide-react';

import { SkillCard } from '../skills/skill-card';

export const OtherProjects = () => (
	<div className="flex w-full justify-center my-10">
		<SkillCard
			iconSrc="/static/fancy-driller-logo.svg"
			heading="Fancy Driller"
			hasHeading
			description={
				<div className="flex flex-col gap-2 justify-center h-full items-center">
					App built to make drilling and preparing for exams easier and more
					fun. Old concept, redesigned visuals.
					<a
						className="flex items-center gap-1 text-xl sm:mt-2 text-blue-500"
						href="https://fancy-driller.vercel.app/"
					>
						visit
						<SquareArrowOutUpRight
							size={24}
							className="w-3 h-3 sm:w-6 sm:h-6"
						/>
					</a>
				</div>
			}
			starCount={0}
		/>
	</div>
);
