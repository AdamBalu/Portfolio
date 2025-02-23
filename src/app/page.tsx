import Image from 'next/image';

import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { ProjectGrid } from '@/components/projects/project-grid';
import { SkillsHeading } from '@/components/my-skills/skills-heading';
import { SkillGrid } from '@/components/my-skills/skill-grid';
import { UnderlinedText } from '@/components/common/underlined-text';
import { Navigation } from '@/components/navigation/navigation';
import { MyTimeline } from '@/components/timeline/my-timeline';

const Page = async () => (
	<>
		<Header />
		<div className="h-10" />
		<Navigation />
		<main
			className="flex flex-col flex-grow mt-10 xl:mt-0 scroll-m-32"
			id="home"
		>
			<div
				id="hero"
				className="max-w-[1100px] w-full mx-auto flex justify-end relative"
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
			<div className="flex justify-center items-center h-[calc(100vh-152px)] mb-[calc(40vh)]">
				<ProjectGrid />
			</div>
			<div id="timeline" className="scroll-m-24">
				<MyTimeline />
			</div>
			<div id="skills" className="scroll-m-24">
				<SkillsHeading />
				<SkillGrid />
			</div>
		</main>
		<Footer />
	</>
);

export default Page;
