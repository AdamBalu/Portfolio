'use client';
import React from 'react';

type ProjectProps = {
	img: React.ReactNode;
	onClick: () => void;
};

export const Project = ({ img, onClick }: ProjectProps) => (
	<button className="group w-full relative" onClick={onClick}>
		<div className="mx-auto group-hover:ease-in group-hover:duration-200">
			<div className="relative cursor-pointer mb-5 bg-cyan-50  rounded-3xl h-96 group-hover:h-[400px] group-hover:transition-height group-hover:duration-700">
				<div className="flex flex-col items-center gap-5 py-8">{img}</div>
			</div>
		</div>
	</button>
);
