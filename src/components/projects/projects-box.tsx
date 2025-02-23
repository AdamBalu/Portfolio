'use client';
import Image from 'next/image';

import { Project } from '@/components/projects/project';
import { scrollToSection } from '@/common/functions/scroll-to-section';

export const ProjectsBox = () => (
	<div className="mx-auto max-w-[1400px]">
		<div className="flex flex-col justify-center min-h-[500px] sm:min-h-[600px] md:min-h-[850px]">
			<div className="mx-4 my-2 sm:my-0 mb-20 sm:mb-0 flex flex-col sm:flex-row justify-center items-center gap-20 sm:gap-2 md:mx-8">
				<Project
					img={
						<div className="h-40 group-hover:transition-transform group-hover:-rotate-12 group-hover:duration-500">
							<div className="w-48 flex justify-center">
								<Image
									src="/static/detoxrank.svg"
									alt="project image"
									width={128}
									height={128}
									className="h-auto"
								/>
							</div>
						</div>
					}
					onClick={() => scrollToSection('section-detox-rank')}
				/>
				<Project
					img={
						<div className="h-40 group-hover:transition-transform group-hover:rotate-12 group-hover:duration-500">
							<div className="w-48 flex justify-center">
								<Image
									src="/static/rings.svg"
									alt="project image"
									width={168}
									height={120}
								/>
							</div>
						</div>
					}
					onClick={() => scrollToSection('section-fotosandrik')}
				/>
				<Project
					img={
						<div className="h-40 group-hover:duration-500 group-hover:transition-transform group-hover:-rotate-6">
							<div className="w-48 flex justify-center">
								<Image
									src="/static/snapshow.svg"
									alt="project image"
									width={188}
									height={128}
								/>
							</div>
						</div>
					}
					onClick={() => scrollToSection('section-snapshow')}
				/>
			</div>
		</div>
	</div>
);
