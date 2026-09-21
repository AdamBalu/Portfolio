'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { otherTechnologies } from '@/data/skill-list';
import { SkillCard } from '@/components/skills/skill-card';

import { curtain, ring } from './curtain';

export const OtherTechnologies = () => (
	<motion.div
		className="flex flex-row flex-wrap gap-8 justify-end"
		variants={curtain(true)}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.2 }}
	>
		{otherTechnologies.map(skill => (
			<motion.div
				key={skill.heading}
				className="relative group hover:shadow-2xl hover:shadow-blue-500 hover:bg-primary/10 rounded-xl"
				variants={ring}
			>
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
			</motion.div>
		))}
	</motion.div>
);
