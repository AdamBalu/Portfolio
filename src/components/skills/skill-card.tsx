import Image from 'next/image';
import React, { type ReactNode } from 'react';

import { Stars } from './stars';

type SkillCardProps = {
	iconSrc: string;
	heading: string;
	description: ReactNode;
	starCount: number;
	hasHeading?: boolean;
};

export const SkillCard = ({
	iconSrc,
	heading,
	description,
	starCount,
	hasHeading = false
}: SkillCardProps) => (
	<div className="group relative">
		<div className="h-48 xl:h-64  group-hover:ease-in-out group-hover:duration-500">
			<div className="relative mb-5 mt-4 rounded-2xl h-26 group-hover:h-48 xl:group-hover:h-60 group-hover:duration-700 dark:shadow-[0_15px_5px_5px_#192C65]">
				<div className="h-[9rem] w-[9rem] xl:h-[15rem] xl:w-[15rem] group-hover:h-52 xl:group-hover:h-64 transition-height ease-in-out duration-0 bg-primary-lightest dark:bg-gradient-to-b dark:from-dark-card dark:to-dark-card-dark  border-[1px] group-hover:shadow-2xl border-slate-100 dark:border-dark-card-border shadow-xl rounded-2xl relative z-10">
					<div
						className={`flex h-full flex-col items-center ${!hasHeading && 'pt-6'} group-hover:pt-6 xl:pt-0 gap-4 xl:gap-2 py-1`}
					>
						<Stars count={starCount} />
						{hasHeading && (
							<div className="visible pt-0 xl:pt-7 group-hover:hidden transition duration-200">
								{heading}
							</div>
						)}
						<Image
							src={iconSrc}
							alt="skill icon"
							width={64}
							height={64}
							className="block group-hover:hidden xl:mt-7"
						/>
						<p
							className={`text-base ${hasHeading && 'pt-0 xl:pt-5'} xl:text-xl transition invisible group-hover:visible group-hover:duration-700 group-hover:-translate-y-7 group-hover:font-bold`}
						>
							{heading}
						</p>
						<div
							className="opacity-0 h-full mt-[-110px] xl:mt-[-100px] group-hover:opacity-100 group-hover:mt-[-30px] xl:group-hover:mt-0 group-hover:transfer group-hover:-translate-y-2 xl:group-hover:-translate-y-5
						transition transform-opacity ease-in duration-500 text-slate-400 px-6 text-center text-xs xl:text-sm"
						>
							{description}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
