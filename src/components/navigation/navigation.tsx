'use client';
import React, { useEffect } from 'react';

import { NavigationItems } from '@/data/navigation-list';
import { scrollToSection } from '@/common/functions/scroll-to-section';

import { ChangeThemeButton } from './change-theme-button';

// Dropdown entries are circles under the same rules as the trigger and the
// social icons, so the whole header reads as one set of controls.
const MENU_ITEM =
	'mb-2 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-primary-shadow bg-primary-lightest dark:bg-dark-card dark:border-dark-card-border hover:bg-primary dark:hover:bg-dark-hovered transition-all duration-300 ease-in-out flex items-center justify-center';

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
			{/* Margin derives from the hero's right edge (max-w-[1100px] centred at xl,
			    75% wide at sm) so the icon keeps a constant gap from the photo instead
			    of colliding with it at 1280–1370px. The constants assume an icon up to
			    56px wide; the 48px circle only widens the gap. */}
			<div className="menuToggle flex flex-col items-end relative mr-4 sm:mr-[min(1.5rem,max(0.5rem,calc(12.5%_-_72px)))] xl:mr-[max(0.5rem,calc((100%_-_1100px)/2_-_80px))]">
				<input type="checkbox" id="navbar-checkbox" className="absolute" />
				<label htmlFor="navbar-checkbox" className="hidden">
					no label for you
				</label>
				{/* Same circle as the social icons: thin primary-shadow border, hover fill,
				    300ms ease. The two lines rotate into an × while the menu is open. */}
				<div className="menuIcon absolute top-0 sm:top-[63px] xl:top-[24px] w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-primary-shadow bg-primary-lightest dark:bg-dark-card dark:border-dark-card-border hover:bg-primary dark:hover:bg-dark-hovered transition-all duration-300 ease-in-out">
					<span className="burger-line" />
					<span className="burger-line" />
				</div>
				<ul className="menuItem right-0">
					{NavigationItems.map((item, _) => (
						<li key={item.href} className={MENU_ITEM}>
							<button
								onClick={() => scrollToSection(item.href)}
								className="w-full h-full rounded-full uppercase hover:text-primary-shadow hover:dark:text-primary-dark flex items-center justify-center"
							>
								<span className="material-symbols-outlined">{item.imgSrc}</span>
							</button>
						</li>
					))}
					<li className={MENU_ITEM}>
						<ChangeThemeButton />
					</li>
				</ul>
			</div>
		</nav>
	);
};
