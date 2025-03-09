'use client';
import Image from 'next/image';
import { Box, Card } from '@mui/material';

import { Chip } from '@/components/projects/chip';

import styles from './styles.module.css';

type BigProjectCardProps = {
	title: string;
	description: string;
	imgSrc: string;
	imgWidth: number;
	url: string;
	borderColor?: string;
	chipColor?: 'emerald' | 'blue' | 'purple' | 'amber';
	chipLabels: string[];
};

export const BigProjectCard = ({
	title,
	description,
	imgSrc,
	imgWidth,
	url,
	borderColor = 'border-primary',
	chipColor = 'emerald',
	chipLabels
}: BigProjectCardProps) => (
	<Box className={styles.cardHoverBorderEffect}>
		<Card
			elevation={0}
			onClick={() => open(url)}
			className="transition-transform duration-500 bg-white dark:bg-dark dark:hover:bg-dark-hovered cursor-pointer p-6 border border-primary hover:border-card-hovered dark:border-none flex flex-col group relative h-full w-full dark:hover:w-[99%] dark:hover:h-[99%] scale-[0.98] hover:scale-[0.99] !rounded-2xl"
		>
			<h2
				className={`text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200 border-b-2 pb-2 ${borderColor}`}
			>
				<span className="duration-200 flex flex-row justify-between items-center">
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
				<p className="text-slate-600 dark:text-slate-400 flex-1">
					{description}
				</p>
				<div className="flex gap-2 mt-4 flex-wrap justify-start">
					{chipLabels.map(label => (
						<Chip key={label} color={chipColor}>
							{label}
						</Chip>
					))}
				</div>
			</div>

			{/*<Button*/}
			{/*	className="absolute bottom-4 right-4 bg-card dark:bg-secondary z-1 opacity-0 group-hover:opacity-100 duration-100 p-1 rounded-md"*/}
			{/*	onClick={() => open(url)}*/}
			{/*>*/}
			{/*	<Image*/}
			{/*		src="/static/globe.svg"*/}
			{/*		alt="visit"*/}
			{/*		className="h-auto"*/}
			{/*		width={32}*/}
			{/*		height={32}*/}
			{/*	/>*/}
			{/*</Button>*/}
		</Card>
	</Box>
);
