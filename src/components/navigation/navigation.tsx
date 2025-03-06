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
		<nav className="sticky top-10 w-full" role="navigation">
			<div className="menuToggle flex flex-col items-end relative">
				<input type="checkbox" id="navbar-checkbox" className="absolute" />
				<label htmlFor="navbar-checkbox" className="hidden">
					no label for you
				</label>
				<span className="w-[17px] sm:w-[33px] absolute top-[50px] burger-line" />
				<span className="w-[17px] sm:w-[33px] absolute top-[55px] burger-line" />
				<span className="w-[17px] sm:w-[33px] absolute top-[60px] burger-line" />
				<ul className="menuItem right-[-9px]">
					{NavigationItems.map((item, _) => (
						<li key={item.href} className="mb-2">
							<button
								onClick={() => scrollToSection(item.href)}
								className="uppercase rounded-md border border-primary dark:border-secondary w-14 h-14 hover:text-primary hover:dark:text-primary-dark p-1 flex items-center justify-center"
							>
								<span className="material-symbols-outlined">{item.imgSrc}</span>
							</button>
						</li>
					))}
					<li>
						<ChangeThemeButton />
					</li>
				</ul>
			</div>
		</nav>
	);
};
