import { type ReactNode } from 'react';

import { BigProjectCard } from '@/components/projects/big-project-card';
import { Chip } from '@/components/projects/chip';
import { UnderlinedText } from '@/components/common/underlined-text';

type Project = {
	title: string;
	description: string;
	borderColor: 'emerald' | 'blue' | 'purple' | 'amber';
	imgSrc: string;
	imgWidth: number;
	chips: ReactNode;
};

export const ProjectGrid = () => {
	const projects: Project[] = [
		{
			title: 'Detox Rank',
			description: 'Mobile application for overcoming dopamine addiction',
			borderColor: 'blue',
			chips: [
				<Chip key="1" color="blue">
					1k+ Downloads
				</Chip>,
				<Chip key="2" color="blue">
					4,7 star rating
				</Chip>,
				<Chip key="3" color="blue">
					200+ active devices
				</Chip>,
				<Chip key="4" color="blue">
					Maintained
				</Chip>
			],
			imgSrc: '/static/detoxrank-light.svg',
			imgWidth: 25
		},
		{
			title: 'Fancy Driller',
			description:
				'Website built to make preparing for exams easier, prettier and especially more fun',
			borderColor: 'purple',
			chips: [
				<Chip key="1" color="purple">
					Actively used
				</Chip>,
				<Chip key="2" color="purple">
					Handy
				</Chip>
			],
			imgSrc: '/static/fancydriller-light.svg',
			imgWidth: 40
		},
		{
			title: 'SnapShow',
			description:
				'Social media platform oriented towards concerts and other musical events',
			borderColor: 'emerald',
			chips: [
				<Chip key="1">Larger codebase</Chip>,
				<Chip key="2">Innovative</Chip>,
				<Chip key="3">Modern</Chip>
			],
			imgSrc: '/static/snapshow-light.svg',
			imgWidth: 45
		},
		{
			title: 'Fotosandrik',
			description: "A wedding photographer's website",
			borderColor: 'amber',
			chips: [
				<Chip key="1" color="amber">
					Simple design
				</Chip>
			],
			imgSrc: '/static/rings-light.svg',
			imgWidth: 40
		}
	];

	return (
		<>
			<div className="grid grid-cols-5 max-w-6xl mx-auto p-1 px-4 gap-3">
				<div className="col-span-3">
					<UnderlinedText
						text="My main projects"
						subText="the ones that I am most proud of"
					/>
				</div>
				<div className="col-span-2 flex items-end">
					<UnderlinedText
						text="Other contributions"
						subText="websites and apps that was a part of"
						small
					/>
				</div>
			</div>
			<div className="grid grid-cols-5 gap-3 h-[700px] max-w-6xl mx-auto p-4">
				{/* Left side - 2x2 grid with cards */}
				<div className="col-span-3 grid grid-cols-2 grid-rows-2 gap-3 h-full">
					{projects.map((project, index) => (
						<BigProjectCard
							key={index}
							title={project.title}
							description={project.description}
							borderColor={project.borderColor}
							chips={project.chips}
							imgSrc={project.imgSrc}
							imgWidth={project.imgWidth}
						/>
					))}
				</div>

				<div className="col-span-2 grid grid-cols-2 gap-3 h-full">
					{[...Array(2)].map((_, colIndex) => (
						<div key={colIndex} className="grid grid-rows-3 gap-3">
							{[...Array(3)].map((_, rowIndex) => (
								<div
									key={rowIndex}
									className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg"
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
};
