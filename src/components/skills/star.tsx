import Image from 'next/image';

export const Star = ({ className }: { className?: string }) => (
	<Image
		src="/static/star.svg"
		alt="Star"
		width={32}
		height={32}
		className={`w-4 h-4 xl:w-8 xl:h-8 ${className}`}
	/>
);
