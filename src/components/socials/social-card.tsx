import Image from 'next/image';

type SocialCardProps = {
	afterColor: string;
	imageSrc: string;
	url: string;
	className?: string;
};

export const SocialCard = ({
	afterColor,
	imageSrc,
	url,
	className
}: SocialCardProps) => (
	<a
		className={`relative cursor-pointer shadow-xl w-16 h-16 md:w-32 md:h-32 bg-slate-100 dark:bg-slate-600 rounded-3xl p-px before:absolute before:w-40 before:h-40 before:-left-20
			 before:-top-20 before:bg-slate-100 dark:before:bg-slate-900 before:rounded-full before:opacity-0 before:pointer-events-none
			 before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)]
			  before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-40 after:h-40 after:-left-20 after:-top-20
				${afterColor} after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)]
				after:translate-y-[var(--mouse-y)] after:hover:opacity-60 after:z-30 after:blur-[60px] overflow-hidden`}
		href={url}
	>
		<div
			className={`relative h-full rounded-[inherit] z-20 overflow-hidden transition-background duration-700 ease-in-out ${className}`}
		>
			<div className="flex flex-col h-full justify-center items-center text-center">
				<div className="relative inline-flex">
					<Image
						src={imageSrc}
						width="64"
						height="64"
						alt="Card 01"
						className="inline-flex w-6 h-6 md:w-16 md:h-16"
					/>
				</div>
			</div>
		</div>
	</a>
);
