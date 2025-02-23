export const scrollToSection = (sectionId: string) => {
	const mainPageStart = document.getElementById(sectionId);
	if (mainPageStart) {
		mainPageStart.scrollIntoView({ behavior: 'smooth' });
	}
};
