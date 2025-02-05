'use client';
import { Card } from '@/components';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function Home() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Prevents hydration issues
	return (
		<div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
			<main className="flex flex-col gap-8 items-center sm:items-start">
				<h1 className="text-4xl font-bold text-center sm:text-left">
					Hey, I&apos;m Mykhailo
				</h1>
				<p className="text-lg text-center sm:text-left">
					I&apos;m a software engineer, currently working at{' '}
					<a href="https://www.ericsson.com" className="text-blue-400">
						Ericsson
					</a>
					.
				</p>
				<p className="text-lg text-center sm:text-left">
					Check out my projects on
					<a
						href="https://github.com/MykhailoKondrat"
						className="text-blue-400"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
							alt="GitHub"
							className="inline-block w-6 h-6 mr-2 invert"
						/>
					</a>
				</p>
				<p className="text-lg text-center sm:text-left">
					This website is still under construction.
				</p>
				<p className="text-lg text-center sm:text-left">
					Feel free to reach out via email at{' '}
					<a href="mailto:mykhailo.kondrat@gmail.com" className="text-blue-400">
						mykhailo.kondrat@gmail.com
					</a>
					.
				</p>
				<a
					href="/Mykhailo Kondrat resume.pdf"
					download
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
				>
					Download Resume
				</a>
				<div className="relative group w-32 h-32 bg-blue-500">
					<div className="absolute inset-0 bg-blue-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"></div>
				</div>

				<div className="grid grid-cols-2 gap-4 w-full">
					<button
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className="p-2 border rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white"
					>
						{theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
					</button>
					<div className="mt-6 p-6 w-64 h-64 flex items-center justify-center border border-foreground bg-background rounded-lg shadow-md transition-colors">
						<p className="text-lg font-semibold text-foreground">
							I change with the theme!
						</p>
					</div>
				</div>
				<Card>
					<p>test</p>
				</Card>
			</main>

			<footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}
