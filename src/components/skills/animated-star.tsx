import { Star } from '@/components/skills/star';

export const AnimatedStarCenter = () => (
	<AnimatedStar translate="group-hover:-translate-y-7 sm:group-hover:-translate-y-12" />
);

export const AnimatedStarLeft = () => (
	<AnimatedStar translate="group-hover:-translate-y-4 sm:group-hover:-translate-y-7 group-hover:-rotate-90" />
);

export const AnimatedStarRight = () => (
	<AnimatedStar translate="group-hover:-translate-y-4 sm:group-hover:-translate-y-7 group-hover:rotate-90" />
);

const AnimatedStar = ({ translate }: { translate: string }) => (
	<Star className={`transition transform duration-500 ${translate}`} />
);
