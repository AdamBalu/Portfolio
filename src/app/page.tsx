import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { ProjectGrid } from '@/components/projects/project-grid';
import { SkillsHeading } from '@/components/my-skills/skills-heading';
import { SkillGrid } from '@/components/my-skills/skill-grid';

const Page = async () => (
	<>
		<Header />
		<main className="flex flex-col flex-grow mt-10 xl:mt-0">
			<div id="projects" className="mt-80 min-h-dvh">
				<ProjectGrid />
			</div>
			<SkillsHeading />
			<SkillGrid />
		</main>
		<Footer />
	</>
);

export default Page;
