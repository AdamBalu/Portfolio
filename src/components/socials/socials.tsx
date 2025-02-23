'use client';
import { useEffect } from 'react';

import { SocialCard } from '@/components/socials/social-card';
import { Spotlight } from '@/common/classes/spotlight';

export const Socials = ({ className }: { className?: string }) => {
	useEffect(() => {
		const spotlights: NodeListOf<HTMLElement> =
			document.querySelectorAll('[data-spotlight]');
		spotlights.forEach(spotlight => {
			new Spotlight(spotlight);
		});
	}, []);

	return (
		<div
			className="mx-auto grid gap-6 grid-cols-3 items-start group"
			data-spotlight=""
		>
			<SocialCard
				afterColor="after:bg-[#1D4C81]"
				imageSrc="/static/linkedin.svg"
				url="https://www.linkedin.com/in/adambalu/"
				className={className}
			/>
			<SocialCard
				afterColor="after:bg-gray-700 dark:after:bg-white"
				imageSrc="/static/github.svg"
				url="https://www.github.com/adambalu"
				className={className}
			/>
			<SocialCard
				afterColor="after:bg-red-500"
				imageSrc="/static/gmail.svg"
				url="mailto:blaubalu.dev@gmail.com"
				className={className}
			/>
		</div>
	);
};
