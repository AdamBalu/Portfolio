import * as React from 'react';
import Image from 'next/image';

import { Checkmark } from './checkmark';
import './styles.css';
import { TimelinePoint } from './timeline-point';
import { timelineData } from './data';

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
