'use client';
import React from 'react';

export const Footer = () => (
	<footer className="flex py-1 min-h-96 items-center justify-end flex-col">
		<p className="text-md text-primary-shadow">Adam Balušeskul © 2025 😎</p>
		<div className="flex flex-row gap-1 items-center">
			<p className="text-xs text-primary-shadow">great icons by</p>
			<button
				className="text-xs underline text-primary-shadow"
				onClick={() => {
					open('https://icons8.com');
				}}
			>
				icons8.com
			</button>
		</div>
	</footer>
);
