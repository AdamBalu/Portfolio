import Image from 'next/image';

export const Star = ({ className }: { className?: string }) => (
	<Image
		src="/static/star.svg"
		alt="Star"
		width={32}
		height={32}
		className={`w-4 h-4 sm:w-8 sm:h-8 ${className}`}
	/>
);
