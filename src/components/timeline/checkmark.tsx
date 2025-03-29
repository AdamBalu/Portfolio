export const Checkmark = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="transparent"
		className="h-10 w-10 mb-3 mt-1 text-border dark:text-dark-card-border shadow-md shadow-blue-500 rounded-full group-hover:shadow-lg group-hover:shadow-blue-500 group-hover:scale-125 transition-all duration-300 ease-in-out dark:stroke-primary dark:fill-primary"
	>
		<circle
			cx="10"
			cy="10"
			r="8"
			stroke="currentColor"
			className="dark:fill-dark-card fill-white"
		/>
		<path
			fillRule="evenodd"
			d="M13.857 8.191a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
			fill="currentColor"
		/>
	</svg>
);
