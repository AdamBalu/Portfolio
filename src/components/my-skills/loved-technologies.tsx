'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { lovedTech } from '@/data/skill-list';
import { SkillCard } from '@/components/skills/skill-card';

import { curtain, ring } from './curtain';
import { useRevealSequence } from './reveal-sequence';

export const LovedTechnologies = () => {
	const { markDone } = useRevealSequence();
	const finished = useRef(0);

	// Counted per icon rather than read off the container, whose own variant
	// animates nothing and would report completion before the first pop.
	const onIconDone = () => {
		finished.current += 1;
		if (finished.current === lovedTech.length) markDone('loved');
	};

	return (
		<motion.div
			className="flex flex-row flex-wrap gap-8"
			variants={curtain(false)}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			{lovedTech.map(skill => (
				<motion.div
					key={skill.heading}
					className="relative group hover:z-20 hover:shadow-2xl hover:shadow-blue-500 hover:bg-primary/10 rounded-xl"
					variants={ring}
					onAnimationComplete={onIconDone}
				>
					<Image
						key={skill.heading}
						src={skill.iconSrc}
						alt={skill.heading}
						width={64}
						height={64}
					/>
					<div className="absolute bottom-0 right-0 bg-primary dark:bg-secondary text-yellow-500 bg-opacity-90 rounded-full p-1 text-xs">
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
};
