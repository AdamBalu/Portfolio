'use client';
import React, { useEffect } from 'react';

import { NavigationItems } from '@/data/navigation-list';
import { scrollToSection } from '@/common/functions/scroll-to-section';

import { ChangeThemeButton } from './change-theme-button';

export const Navigation = () => {
	useEffect(() => {
		const navbarCheckbox = document.getElementById(
			'navbar-checkbox'
		) as HTMLInputElement;
		const navbar = document.querySelector('.menuToggle');
		const navbarItems = document.querySelectorAll('.menuItem button');

		const closeNavbar = () => {
			if (navbarCheckbox.checked) {
				navbarCheckbox.checked = false;
			}
		};

		// Close navbar when clicking on a navbar item
		navbarItems.forEach(item => {
			item.addEventListener('click', () => {
				closeNavbar();
			});
		});

		// Close navbar when clicking outside the navbar
		document.addEventListener('click', event => {
			if (
				navbar &&
				navbarCheckbox.checked &&
				!navbar.contains(event.target as Node) &&
				event.target !== navbarCheckbox
			) {
				closeNavbar();
			}
		});

		// Cleanup event listeners on component unmount
		return () => {
			navbarItems.forEach(item => {
				item.removeEventListener('click', closeNavbar);
			});
			document.removeEventListener('click', closeNavbar);
		};
	}, []);

	return (
		<nav className="sticky top-4 sm:top-10 w-full z-10" role="navigation">
			<div className="menuToggle flex flex-col items-end relative mr-4 sm:mr-6 xl:mr-[80px]">
				<input type="checkbox" id="navbar-checkbox" className="absolute" />
				<label htmlFor="navbar-checkbox" className="hidden">
					no label for you
				</label>
				<div className="bg-white sm:min-w-12 dark:bg-dark-card dark:border border-dark-card-border rounded-md absolute top-0 sm:top-[63px] xl:top-[24px] w-10 h-10 sm:w-[56px] sm:h-[56px] flex items-center justify-center">
					<div>
						<span className="w-[25px] sm:w-[33px] mt-0 burger-line" />
						<span className="w-[25px] sm:w-[33px] mt-0.5 sm:mt-1.5 burger-line" />
						<span className="w-[25px] sm:w-[33px] mt-0.5 sm:mt-1.5 burger-line" />
					</div>
				</div>
				<ul className="menuItem right-0">
					{NavigationItems.map((item, _) => (
						<li
							key={item.href}
							className="mb-2 bg-white dark:bg-dark-card border-b-2 border-l-2 hover:border-none border-dark-card-border"
						>
							<button
								onClick={() => scrollToSection(item.href)}
								className="uppercase dark:border-secondary w-14 h-14 hover:text-primary hover:dark:text-primary-dark p-1 flex items-center justify-center"
							>
								<span className="material-symbols-outlined">{item.imgSrc}</span>
							</button>
						</li>
					))}
					<li className="bg-white dark:bg-dark-card border-b-2 border-l-2 hover:border-none border-dark-card-border">
						<ChangeThemeButton />
					</li>
				</ul>
			</div>
		</nav>
	);
};
