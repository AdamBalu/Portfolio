'use client';
import {
	createContext,
	useCallback,
	useContext,
	useState,
	type ReactNode
} from 'react';

type RevealSequence = {
	done: ReadonlySet<string>;
	markDone: (id: string) => void;
};

const RevealSequenceContext = createContext<RevealSequence>({
	done: new Set(),
	markDone: () => {}
});

/* Lets one reveal wait for another: the icon groups report when their last
   pop has finished, and the "outdated" arrow only starts once both have. */
export const RevealSequenceProvider = ({
	children
}: {
	children: ReactNode;
}) => {
	const [done, setDone] = useState<ReadonlySet<string>>(new Set());
	const markDone = useCallback((id: string) => {
		setDone(current => (current.has(id) ? current : new Set(current).add(id)));
	}, []);

	return (
		<RevealSequenceContext.Provider value={{ done, markDone }}>
			{children}
		</RevealSequenceContext.Provider>
	);
};

export const useRevealSequence = () => useContext(RevealSequenceContext);
