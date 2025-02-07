'use client';
import { Avatar } from '@/components';
// import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function Home() {
	// const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return (
		<div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
			<main className="flex flex-col gap-8 items-center sm:items-start">
				<div className="grid grid-cols-3 gap-4 w-full">
					<div className="col-span-1">
						<Avatar />
					</div>
					<div className="col-span-2">
						<h1
							className="text-8xl font-mono font-black text-center sm:text-left uppercase"
							style={{ textShadow: '10px 10px 0px black' }}
						>
							Hello! <br />I am Mykhailo
							<span className="text-orange-500">.</span>
						</h1>
						<p className="text-lg font-merry text-center sm:text-left">
							Software engineer with 5 years of experience, currently working at{' '}
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
						<a
							href="/Mykhailo Kondrat resume.pdf"
							download
							className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
						>
							Download Resume
						</a>
					</div>
				</div>
				<p className="text-lg text-center sm:text-left">
					This website is still under construction.
				</p>
				<p className="text-lg text-center sm:text-left">
					Feel free to reach out via email at
					<a href="mailto:mykhailo.kondrat@gmail.com" className="text-blue-400">
						mykhailo.kondrat@gmail.com
					</a>
					.
				</p>
			</main>

			<footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}
