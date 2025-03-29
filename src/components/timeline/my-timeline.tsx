import * as React from 'react';
import Image from 'next/image';

import { Checkmark } from './checkmark';
import './styles.css';
import { TimelinePoint } from './timeline-point';

const timelineData = [
	{
		variant: 'left' as const,
		date: '2019',
		heading: 'Finished High school - Gymnázium Poštová 9',
		text: 'As one of the most prestigious high schools in Slovakia, it was not an easy path, but in the end I managed to successfully get by. I learned the basics of Python and web development here.',
		imageSrc: '/static/gympos.png',
		imageAlt: 'gympos',
		imageWidth: 100,
		imageHeight: 100,
		edgeTimeline: true,
		endTimeline: false
	},
	{
		variant: 'right' as const,
		date: '2020',
		heading: 'Started my studies at Brno University of Technology',
		text: 'I decided to study computer science at the university because I wanted to learn more about programming and web development. I ended up learning way more than I expected.',
		imageSrc: '/static/vut.png',
		imageAlt: 'vut',
		imageWidth: 120,
		imageHeight: 100,
		edgeTimeline: false,
		endTimeline: false
	},
	{
		variant: 'left' as const,
		date: '06.2023',
		heading: "Finished my Bachelor's degree at BUT",
		text: "I managed to complete my Bachelor's thesis in time and with the highest grade - A. Thanks to this thesis (Detox Rank, which is also mentioned in my projects), I learned a lot about application development and composition principles.",
		imageSrc: '/static/graduation.png',
		imageAlt: 'graduation',
		imageWidth: 150,
		imageHeight: 100,
		edgeTimeline: false,
		endTimeline: false
	},
	{
		variant: 'right' as const,
		date: '09.2023',
		heading: "Started my Master's degree studies at Masaryk University",
		text: "Next up, I went for a Master's degree in computer science. I chose Software development as my field of study, mainly because of how many new and exciting technologies the courses at MUNI covered. I tried Next.js, Rust, Flutter, Go and more.",
		imageSrc: '/static/muni.png',
		imageAlt: 'muni',
		imageWidth: 150,
		imageHeight: 100,
		edgeTimeline: false,
		endTimeline: false
	},
	{
		variant: 'left' as const,
		date: '2024-now',
		heading: 'Working for Betrian',
		text: 'Finally, I got a job at Betrian. I am working as a software developer, mainly on the frontend side. I am using primarily React, Redux and TypeScript. Besides that, I also enjoy coding my own projects. I enjoy learning new technologies and sharpening my skillset.',
		imageSrc: '/static/betrian.png',
		imageAlt: 'betrian',
		imageWidth: 150,
		imageHeight: 100,
		edgeTimeline: false,
		endTimeline: true
	}
];

export const MyTimeline = () => (
	<ul className="timeline custom-timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
		{timelineData.map((item, index) => (
			<TimelinePoint
				key={index}
				variant={item.variant}
				date={item.date}
				heading={item.heading}
				text={item.text}
				image={
					<Image
						src={item.imageSrc}
						alt={item.imageAlt}
						width={item.imageWidth}
						height={item.imageHeight}
					/>
				}
				icon={<Checkmark />}
				edgeTimeline={item.edgeTimeline}
				endTimeline={item.endTimeline}
			/>
		))}
	</ul>
);
