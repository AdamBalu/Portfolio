export const UnderlinedText = ({
	text,
	subText,
	small = false
}: {
	text: string;
	subText: string;
	small?: boolean;
}) => (
	<div className="w-max flex flex-col">
		<div className="max-w-max">
			<h1 className={`${small ? 'text-md' : 'text-2xl'} font-bold`}>{text}</h1>
			<div
				className={`p-px bg-gradient-to-r from-primary to-primary-shadow ${small ? 'h-1' : 'h-2'}`}
			/>
		</div>
		<div>{subText}</div>
	</div>
);
