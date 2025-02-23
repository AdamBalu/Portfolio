import Image from 'next/image';

import { otherTechnologies } from '@/data/skill-list';
import { SkillCard } from '@/components/skills/skill-card';

export const OtherTechnologies = () => (
	<div className="flex flex-row flex-wrap gap-8 justify-end">
		{otherTechnologies.map(skill => (
			<div key={skill.heading} className="relative group">
				<Image
					key={skill.heading}
					src={skill.iconSrc}
					alt={skill.heading}
					width={64}
					height={64}
				/>
				<div className="absolute bottom-0 right-0 bg-[#9e43ec] text-yellow-500 bg-opacity-90 rounded-full p-1 text-xs">
					{'★'.repeat(skill.starCount)}
				</div>
				<div className="absolute group-hover:visible invisible transform -translate-x-[calc(50%-30px)] transition duration-200 z-10">
					<SkillCard
						iconSrc={skill.iconSrc}
						heading={skill.heading}
						description={skill.description}
						starCount={skill.starCount}
					/>
				</div>
			</div>
		))}
	</div>
);
