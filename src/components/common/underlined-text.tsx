export const UnderlinedText = ({
	text,
	subText,
	small = false,
	end = false,
	className = ''
}: {
	text: string;
	subText: string;
	small?: boolean;
	end?: boolean;
	className?: string;
}) => (
	<div className={`w-max flex flex-col ${end && 'items-end'} ${className}`}>
		<div className="max-w-max">
			<h1
				className={`${small ? 'text-md' : 'text-xl sm:text-2xl'} font-bold ${end && 'text-right'}`}
			>
				{text}
			</h1>
			<div
				className={`p-px bg-gradient-to-r from-primary to-primary-shadow ${small ? 'h-1' : 'h-2'}`}
			/>
		</div>
		<div
			className={
				end ? 'text-right text-xs sm:text-base' : 'text-xs sm:text-base'
			}
		>
			{subText}
		</div>
	</div>
);
