'use client';
import React, { useEffect } from 'react';

import { NavigationItems } from '@/data/navigation-list';
import { scrollToSection } from '@/common/functions/scroll-to-section';
import { ChangeThemeButton } from '@/components/navigation/change-theme-button';

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

		// Close navbar when clicking outside of the navbar
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
		<div>
			<ChangeThemeButton />
			<nav className="menu--right" role="navigation">
				<div className="menuToggle">
					<input type="checkbox" id="navbar-checkbox" />
					<label htmlFor="navbar-checkbox" className="hidden">
						fuck you label rules
					</label>
					<span className="w-[17px] sm:w-[33px]" />
					<span className="w-[17px] sm:w-[33px]" />
					<span className="w-[17px] sm:w-[33px]" />
					<ul className="menuItem rounded-bl-2xl pt-20 p-8 md:px-12 w-48 md:w-64 shadow-md dark:border dark:border-slate-700 bg-gray-50 dark:bg-secondary">
						{NavigationItems.map((item, _) => (
							<li key={item.label} className="my-2 sm:my-6">
								<button
									onClick={() => scrollToSection(item.href)}
									className="uppercase text-slate-700 dark:text-slate-300 hover:text-primary hover:dark:text-primary-dark"
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
};
