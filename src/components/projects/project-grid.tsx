import { BigProjectCard } from '@/components/projects/big-project-card';
import { UnderlinedText } from '@/components/common/underlined-text';
import { projects, smallProjects } from '@/components/projects/projects';
import { SmallProjectCard } from '@/components/projects/small-project-card';

export const ProjectGrid = () => (
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
					text="Other contributions and works"
					subText="websites and apps that I built or was a part of"
					small
				/>
			</div>
		</div>
		<div className="grid grid-cols-5 gap-3 h-[700px] max-w-6xl mx-auto p-4">
			<div className="col-span-3 grid grid-cols-2 grid-rows-2 gap-3 h-full">
				{projects.map((project, index) => (
					<BigProjectCard
						key={index}
						title={project.title}
						description={project.description}
						borderColor={project.borderColor}
						chipLabels={project.chipLabels}
						imgSrc={project.imgSrc}
						imgWidth={project.imgWidth}
						url={project.url}
					/>
				))}
			</div>

			<div className="col-span-2 grid grid-cols-2 gap-3 h-full">
				{[0, 1].map(colIndex => (
					<div key={colIndex} className="grid grid-rows-3 gap-3">
						{smallProjects
							.slice(colIndex * 3, (colIndex + 1) * 3)
							.map(project => (
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
					</div>
				))}
			</div>
		</div>
	</>
);
