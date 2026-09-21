'use client';
import React, { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@mui/base';

// Nothing to subscribe to: the snapshots alone carry the information.
const subscribeToNothing = () => () => {};

export const ChangeThemeButton = () => {
	// false in the server snapshot, true on the client, so the button is absent
	// from the server HTML and appears once hydrated — the same behaviour as
	// setting a "mounted" flag in an effect, without setting state in an effect.
	const mounted = useSyncExternalStore(
		subscribeToNothing,
		() => true,
		() => false
	);
	const { theme, setTheme } = useTheme();

	if (!mounted) {
		return null;
	}

	return (
		<div>
			<Button
				name="change theme"
				className="px-4 py-2 font-semibold rounded-md"
				onClick={() => {
					setTheme(theme === 'light' ? 'dark' : 'light');
				}}
			>
				{theme === 'light' ? (
					<Moon
						color="orange"
						className="hover:fill-primary transition-transform hover:-rotate-[360deg] ease-in-out duration-1000"
					/>
				) : (
					<Sun className="hover:fill-primary-dark transition-transform hover:-rotate-[180deg] ease-in-out duration-1000" />
				)}
			</Button>
		</div>
	);
};
