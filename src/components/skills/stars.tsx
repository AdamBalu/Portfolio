import {
	AnimatedStarCenter,
	AnimatedStarLeft,
	AnimatedStarRight
} from '@/components/skills/animated-star';

export const Stars = ({ count }: { count: number }) => (
	<>
		{count === 0 && <div className="flex justify-center w-full sm:pt-4" />}
		{count === 1 && (
			<div className="flex justify-center w-full sm:pt-10">
				<AnimatedStarCenter />
			</div>
		)}
		{count === 2 && (
			<div className="flex justify-between w-full px-10 sm:pt-10">
				<AnimatedStarLeft />
				<AnimatedStarRight />
			</div>
		)}

		{count === 3 && (
			<div className="flex justify-between w-full px-10 sm:pt-10">
				<AnimatedStarLeft />
				<AnimatedStarCenter />
				<AnimatedStarRight />
			</div>
		)}
	</>
);
