export const SkillsHeading = () => (
	<div className="flex flex-col items-center justify-center">
		<div className="flex justify-between items-center w-full gap-6">
			<h1 className="text-md sm:text-2xl font-bold">My favorite tech</h1>
			<h1 className="text-md sm:text-2xl font-bold text-end">
				Tech that I also tried out
			</h1>
		</div>
		<div className="p-px bg-gradient-to-r from-primary to-[#A53DBF] h-2 w-full" />
		<div className="flex justify-between items-center gap-8 w-full">
			<p className="text-xs sm:text-base">
				these which I love and I’m quite good at
			</p>
			<p className="text-xs sm:text-base text-end">
				and which I learned along the way
			</p>
		</div>
	</div>
);
