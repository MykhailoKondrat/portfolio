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
			<body className={`${merriweather.className} antialiased dark`}>
				<ThemeProvider>
					<main className="flex flex-col items-start">
						<div className="bg-none center p-3 z-[6] fixed flex w-full justify-between">
							<p className="font-merriweather text-foreground text-left max-lg:text-center">
								kondrat<span className="text-accent">.dev /</span>
							</p>
							<nav className="self-end">
								<ul className="flex space-x-8">
									<li>About</li>
									<li>My projects</li>
									<li>Playground</li>
								</ul>
							</nav>
						</div>
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
