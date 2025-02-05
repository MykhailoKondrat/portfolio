'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Prevents hydration mismatch issue (Next.js warning)
	if (!mounted) return <>{children}</>;

	return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
