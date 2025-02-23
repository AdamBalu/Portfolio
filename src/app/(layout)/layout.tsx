import React from 'react';

import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<>
		<Header />
		<main
			className="container flex flex-col flex-grow mt-10 px-3"
			suppressHydrationWarning
		>
			{children}
		</main>
		<Footer />
	</>
);

export default RootLayout;
