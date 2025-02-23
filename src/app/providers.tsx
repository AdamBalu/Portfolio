'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { CssBaseline } from '@mui/material';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider attribute="class" enableSystem>
			<CssBaseline />
			{children}
		</ThemeProvider>
	</QueryClientProvider>
);
