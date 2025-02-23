type Project = {
	title: string;
	description: string;
	borderColor: 'emerald' | 'blue' | 'purple' | 'amber';
	imgSrc: string;
	imgWidth: number;
	chipLabels: string[];
};

type SmallProject = {
	title: string;
	imgSrc: string;
	imgWidth: number;
	chipLabel: string;
	borderColor?: 'white' | 'blue';
};

export const projects: Project[] = [
	{
		title: 'Detox Rank',
		description: 'Mobile application for overcoming dopamine addiction',
		borderColor: 'blue',
		chipLabels: [
			'1k+ Downloads',
			'4,7 star rating',
			'200+ active devices',
			'Maintained'
		],
		imgSrc: '/static/detoxrank-light.svg',
		imgWidth: 25
	},
	{
		title: 'Fancy Driller',
		description:
			'Website built to make preparing for exams easier, prettier and especially more fun',
		borderColor: 'purple',
		chipLabels: ['Actively used', 'Handy'],
		imgSrc: '/static/fancydriller-light.svg',
		imgWidth: 40
	},
	{
		title: 'SnapShow',
		description:
			'Social media platform oriented towards concerts and other musical events',
		borderColor: 'emerald',
		chipLabels: ['Larger codebase', 'Innovative', 'Modern'],
		imgSrc: '/static/snapshow-light.svg',
		imgWidth: 45
	},
	{
		title: 'Fotosandrik',
		description: "A wedding photographer's website",
		borderColor: 'amber',
		chipLabels: ['Simple design'],
		imgSrc: '/static/rings-light.svg',
		imgWidth: 40
	}
];

export const smallProjects: SmallProject[] = [
	{
		title: 'Visitjakub Brno',
		imgSrc: '/static/visitjakub-logo.svg',
		imgWidth: 100,
		chipLabel: 'Tourist attraction'
	},
	{
		title: 'NavData',
		imgSrc: '/static/navdata-logo.svg',
		imgWidth: 160,
		chipLabel: 'Train navigation'
	},
	{
		title: 'My old portfolio',
		imgSrc: '/static/old-portfolio-logo.svg',
		imgWidth: 120,
		chipLabel: 'Playful design'
	},
	{
		title: 'Brno Ossuary',
		imgSrc: '/static/ossuary.png',
		imgWidth: 120,
		chipLabel: 'Admin interface'
	},
	{
		title: 'MH Shop',
		imgSrc: '/static/mh-store-logo.svg',
		imgWidth: 120,
		chipLabel: 'E-commerce'
	},
	{
		title: 'BookHub',
		imgSrc: '/static/bookhub-logo.svg',
		imgWidth: 100,
		chipLabel: 'School project'
		// https://pv179-bookhub.dyn.cloud.e-infra.cz/
	}
];
