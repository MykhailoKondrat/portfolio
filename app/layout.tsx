import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/core';
import { Menu } from '@/components';

const merriweather = Merriweather_Sans({
	subsets: ['latin'],
	weight: '700',
});
export const metadata: Metadata = {
	title: 'Mykhailo Kondrat',
	description: 'Software engineer and former UI/UX designer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${merriweather.className} antialiased dark`}>
				<ThemeProvider>
					<main className="flex flex-col items-start">
						<Menu />
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
