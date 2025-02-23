'use client';
import { type ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@mui/base';

type BigProjectCardProps = {
	title: string;
	description: string;
	imgSrc: string;
	imgWidth: number;
	borderColor?: 'emerald' | 'blue' | 'purple' | 'amber';
	chips: ReactNode;
};

export const BigProjectCard = ({
	title,
	description,
	imgSrc,
	imgWidth,
	borderColor = 'emerald',
	chips
}: BigProjectCardProps) => (
	<article className="bg-white dark:bg-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group relative">
		<h2
			className={`text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 border-b-2 pb-2 border-${borderColor}-500`}
		>
			<span className="duration-200 group-hover:translate-y-[calc(-3px)] flex flex-row justify-between items-center">
				{title}
				<Image
					src={imgSrc}
					alt={title}
					width={imgWidth}
					height={30}
					sizes="100vw"
				/>
			</span>
		</h2>

		<div className="flex-1 flex flex-col">
			<p className="text-slate-600 dark:text-slate-400 flex-1">{description}</p>
			<div className="flex gap-2 mt-4 flex-wrap justify-start">{chips}</div>
		</div>

		<Button className="absolute bottom-4 right-4 bg-card dark:bg-secondary z-1 invisible group-hover:visible p-1 rounded-md">
			<Image
				src="/static/expand.svg"
				alt="expand"
				className="h-auto"
				width={32}
				height={32}
			/>
		</Button>
	</article>
);
