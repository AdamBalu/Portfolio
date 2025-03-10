'use client';
import Image from 'next/image';
import { Box, Card } from '@mui/material';

import { Chip } from '@/components/projects/chip';
import styles from '@/components/projects/styles.module.css';

type SmallProjectCardProps = {
	title: string;
	imgSrc: string;
	imgWidth: number;
	url: string;
	borderColor?: 'white' | 'blue';
	chipLabel: string;
};

export const SmallProjectCard = ({
	title,
	imgSrc,
	imgWidth,
	url,
	borderColor = 'white',
	chipLabel
}: SmallProjectCardProps) => (
	<Box className={styles.cardHoverBorderEffect}>
		<Card
			elevation={0}
			onClick={() => open(url)}
			className="!bg-primary-lightest dark:!bg-dark cursor-pointer hover:!bg-primary-lighter hover:border-none dark:hover:!bg-dark-hovered p-2 !rounded-2xl border border-primary dark:border-none duration-300 flex flex-col group relative h-full justify-between items-center w-full scale-[0.98] hover:scale-1"
		>
			<h2 className="absolute block text-xs top-2 md:top-4 font-bold sm:opacity-0 group-hover:opacity-100 md:text-base text-slate-500">
				{title}
			</h2>
			<Image
				src={imgSrc}
				alt={title}
				width={imgWidth}
				height={30}
				sizes="100vw"
				className="flex h-full pt-6 transition-all duration-200 sm:pt-6 justify-center items-center object-contain"
			/>
			<div className="self-start">
				<div className="hidden md:flex gap-2 mt-0 xs:mt-2 flex-wrap justify-start opacity-0 group-hover:opacity-100">
					<Chip color={borderColor}>{chipLabel}</Chip>
				</div>
			</div>

			{/*<Button*/}
			{/*	className="absolute bottom-4 right-4 bg-card dark:bg-secondary z-1 opacity-0 group-hover:opacity-100 p-1 rounded-md duration-100"*/}
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
