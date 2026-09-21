import { Cormorant_Garamond } from 'next/font/google';
import type { Metadata } from 'next';

import { Checklist } from '@/components/expedition-33/checklist';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['500', '600'],
	style: ['normal', 'italic'],
	variable: '--font-cormorant',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Expedition 33 100% playthrough checklist',
	description:
		'Every zone, Nevron quest, collectible and missable in Clair Obscur: Expedition 33, with community level ballparks. Ticks save in your browser.'
};

const Page = () => (
	<div className={cormorant.variable}>
		<Checklist />
	</div>
);

export default Page;
