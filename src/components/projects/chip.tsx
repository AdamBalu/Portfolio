import type { ReactNode } from 'react';

export const Chip = ({
	children,
	color = 'emerald'
}: {
	children: ReactNode;
	color?: 'emerald' | 'blue' | 'purple' | 'amber' | 'white';
}) => (
	<span
		className={`px-3 py-1 rounded-full text-sm 
    ${color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' : ''}
    ${color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : ''}
    ${color === 'purple' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : ''}
    ${color === 'amber' ? 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200' : ''}
    ${color === 'white' ? 'bg-primary opacity-60 dark:bg-secondary text-slate-800 dark:text-slate-200' : ''}
  `}
	>
		{children}
	</span>
);
