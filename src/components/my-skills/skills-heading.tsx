export const SkillsHeading = () => (
	<div className="flex flex-col items-center justify-center mx-4">
		<div className="flex justify-between items-end w-full gap-6">
			<h1 className="text-xs sm:text-2xl font-bold mb-1">My favorite tech</h1>
			<h1 className="text-xs sm:text-2xl font-bold text-end mb-1">
				Other ones I tried
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
