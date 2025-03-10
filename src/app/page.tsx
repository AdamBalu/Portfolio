import Image from 'next/image';

import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { ProjectGrid } from '@/components/projects/project-grid';
import { SkillsHeading } from '@/components/my-skills/skills-heading';
import { SkillGrid } from '@/components/my-skills/skill-grid';
import { UnderlinedText } from '@/components/common/underlined-text';
import { Navigation } from '@/components/navigation/navigation';
import { ProjectGridSmall } from '@/components/projects/project-grid-small';

const Page = async () => (
	<>
		<Header />
		<div className="h-2 sm:h-10" />
		<Navigation />
		<main
			className="flex flex-col flex-grow mt-10 xl:mt-0 scroll-m-32"
			id="home"
		>
			<div
				id="hero"
				className="max-w-[1100px] w-full sm:w-[75%] xl:w-full mx-auto flex justify-end relative mt-6 sm:mt-0 px-2 sm:px-0"
			>
				<div className="flex flex-row items-center gap-4">
					<UnderlinedText
						text="Hi, I'm Adam"
						subText="and I like designing and coding stuff"
						className="max-w-52"
						end
					/>
					<Image
						src="/static/github.svg"
						alt=""
						width={100}
						height={100}
						className="rounded-full border border-primary-shadow"
					/>
				</div>
			</div>
			<div className="justify-center items-center h-[calc(100vh-152px)] min-h-[1000px] mb-[calc(40vh)] hidden min-[1280px]:flex">
				<ProjectGrid />
			</div>

			<div className="flex justify-center items-center min-h-[calc(100vh-152px)] h-max mb-10 min-[1280px]:hidden">
				<ProjectGridSmall />
			</div>

			<div
				id="skills"
				className="scroll-m-24 mx-8 sm:mx-20 2xl:mx-0 mb-12 sm:mb-64"
			>
				<SkillsHeading />
				<SkillGrid />
			</div>
		</main>
		<Footer />
	</>
);

export default Page;
