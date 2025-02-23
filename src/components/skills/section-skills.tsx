import { SkillGrid } from './skill-grid';

export const SectionSkills = () => (
	<div id="section-skills">
		<div className="relative">
			<div className="flex flex-col gap-2 sm:gap-6 md:gap-8 items-center justify-center mx-10 mt-20 h-full">
				<SkillGrid />
			</div>
		</div>
	</div>
);
