import { BigProjectCard } from '@/components/projects/big-project-card';
import { UnderlinedText } from '@/components/common/underlined-text';
import { projects, smallProjects } from '@/components/projects/projects';
import { SmallProjectCard } from '@/components/projects/small-project-card';

export const ProjectGridSmall = () => (
	<div>
		<div className="max-w-6xl mx-auto p-4" id="projects">
			<UnderlinedText
				text="My main projects"
				subText="the ones that I am most invested in and proud of"
				className="ml-1 sm:ml-1 mt-12 mb-4"
			/>

			<div className="flex flex-col gap-2 sm:gap-4 mb-6 sm:mb-16 mt-2 sm:mt-6">
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
			</div>

			<UnderlinedText
				text="Other contributions and works"
				subText="websites and apps that I built or was a part of building"
				small
				className="px-2 sm:max-w-none mx-0 mt-12 mb-4"
			/>

			<div className="flex flex-wrap gap-3 justify-center mt-2 sm:mt-8">
				{smallProjects.map(project => (
					<div
						key={project.title}
						className="w-[48%] min-[430px]:w-[calc(33.333%-10px)] h-[130px] md:h-[180px]"
					>
						<SmallProjectCard
							title={project.title}
							imgSrc={project.imgSrc}
							imgWidth={project.imgWidth}
							chipLabel={project.chipLabel}
							borderColor={project.borderColor}
							url={project.url}
						/>
					</div>
				))}
			</div>
		</div>
	</div>
);
