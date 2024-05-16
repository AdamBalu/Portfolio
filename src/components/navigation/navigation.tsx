import React from 'react';

import { NavLink } from '@/components/navigation/nav-link';
import { NavigationItems } from '@/components/navigation/navigation-list';

export const Navigation = async () => {
	return (
		<nav className="flex navbar-end gap-5 flex-1">
			<ul className="hidden lg:flex justify-end gap-x-16 py-4">
				{NavigationItems.map((item, index) => (
					<NavLink key={item.label} href={item.href} label={item.label} />
				))}
			</ul>
		</nav>
	);
};