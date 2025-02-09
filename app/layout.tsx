import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/core';

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
			<body
				className={`${merriweather.className} antialiased bg-background overflow-y-hidden dark`}
			>
				<div className="max-w-[75%] w-[75%] mx-auto max-h-[100vh]">
					<ThemeProvider>{children}</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
