import { skillList } from '@/data/skill-list';
import { SkillCard } from '@/components/skills/skill-card';

export const SkillGrid = () => (
	<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-12 sm:gap-y-16 mb-20">
		{skillList.map(skill => (
			<SkillCard key={skill.heading} {...skill} />
		))}
	</div>
);
