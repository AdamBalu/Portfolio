import './globals.css';
import 'material-symbols';

import type { Metadata, Viewport } from 'next';
import { Raleway } from 'next/font/google';
import { Toaster } from 'sonner';
import React from 'react';

import { Providers } from './providers';

const raleway = Raleway({ subsets: ['latin'] });

// next/head is a no-op in the App Router, so the icons, manifest and
// description that used to sit in a <Head> block here never reached the
// page. The Metadata API is what actually renders them.
export const metadata: Metadata = {
	title: 'Adam Balušeskul - Portfolio',
	description: 'Adam Balušeskul - My Portfolio',
	manifest: '/site.webmanifest',
	icons: {
		icon: [
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon.ico', sizes: 'any' }
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
	},
	other: { 'msapplication-TileColor': '#da532c' }
};

export const viewport: Viewport = {
	themeColor: '#ffffff'
};

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	// next-themes sets class and color-scheme on <html> before hydration, so
	// the server markup can never match here. The suppression is scoped to
	// this one element.
	<html lang="en" suppressHydrationWarning>
		<body
			id="bg-myown"
			className={`relative isolate min-h-screen flex flex-col ${raleway.className} text-slate-700 dark:text-slate-200 transition-color duration-500 ease-in-out bg-[url(/static/cooked_bg_white.svg)]`}
		>
			{/* background-image cannot transition, so the dark pattern lives on its
			    own layer and fades in over the light one. Absolute rather than fixed
			    so it scrolls with the page exactly as the body background does. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 bg-[url(/static/cooked_bg_new.svg)] opacity-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none dark:opacity-100"
			/>
			{/* Clips sideways overhang at the screen edge, not the 1420px column,
			    so hover cards and entrance offsets can use the side margins of
			    wide screens without ever adding a horizontal scrollbar. */}
			<div className="transition-background duration-700 ease-in-out overflow-x-clip">
				<Providers>
					<div className="max-w-[1420px] mx-auto">{children}</div>
				</Providers>
				<Toaster position="bottom-right" richColors />
			</div>
		</body>
	</html>
);

export default RootLayout;
