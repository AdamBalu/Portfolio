import React from 'react';

type TimelinePointProps = {
	variant: 'left' | 'right';
	date: string;
	heading: string;
	text: string;
	image: React.ReactNode;
	icon: React.ReactNode;
	edgeTimeline?: boolean;
	endTimeline?: boolean;
};

export const TimelinePoint = ({
	variant,
	date,
	heading,
	text,
	image,
	icon,
	edgeTimeline = false,
	endTimeline = false
}: TimelinePointProps) => {
	const isLeft = variant === 'left';

	return (
		<li className="group">
			{!edgeTimeline && <hr />}
			<div className="timeline-middle">{icon}</div>
			<div
				className={`timeline-start md:mb-48 !ml-4 ${isLeft ? 'md:ml-0 mr-0 md:mr-6 md:text-end' : 'md:ml-6'} mt-2 w-full md:w-auto pr-6 pt-2 ${!isLeft && 'md:timeline-end'}`}
			>
				<time className="text-border dark:text-primary text-xl font-bold dark:bg-dark-card rounded-md p-0.5 md:p-1">
					{date}
				</time>
				<div className="text-sm md:text-lg font-black md:mt-2">{heading}</div>
				<div className="flex flex-row gap-3 md:gap-4 items-top justify-between w-full">
					<div className="mt-1 md:mt-2 md:opacity-0 text-xs md:text-base md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out max-w-[400px] md:max-w-none">
						{text}
					</div>
					<div className="md:hidden p-2 min-w-[80px] bg-primary bg-opacity-40 rounded-md size-max min-h-[80px] flex items-center justify-center">
						{image}
					</div>
				</div>
			</div>
			<div
				className={`${isLeft ? 'timeline-end' : 'timeline-start'} mb-4 md:mb-48 hidden md:block !self-start`}
			>
				<div
					className={`p-4 ${isLeft ? 'ml-6' : 'mr-6'} dark:group-hover:shadow-xl dark:group-hover:shadow-[0_0_15px_15px_#192C65] rounded-xl transition-all duration-300 ease-in-out mt-[-20%]`}
				>
					{image}
				</div>
			</div>
			{!endTimeline && <hr className="connector" />}
		</li>
	);
};
