'use client';
import React, { type ReactNode } from 'react';
import { IconButton } from '@mui/material';

export const SocialIcon = ({
	icon,
	link
}: {
	icon: ReactNode;
	link: string;
}) => (
	<div className="border border-primary-shadow rounded-full hover:bg-primary transition-all duration-300 ease-in-out">
		<IconButton
			className="w-10 h-10 flex items-center justify-center group first:group-hover:hidden !p-0"
			onClick={() => window.open(link, '_blank')}
		>
			{icon}
		</IconButton>
	</div>
);
