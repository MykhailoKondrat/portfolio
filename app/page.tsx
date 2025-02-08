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
		<div className="min-h-screen pb-20 sm:p-0-10-10-10 text-white">
			<main className="flex flex-col gap-8 items-center sm:items-start">
				<div className="grid grid-cols-3 gap-4 w-full">
					<div className="col-span-3 center p-3">
						<p className="font-merriweather text-foreground text-left">
							kondrat<span className="text-accent">.dev /</span>
						</p>
					</div>
					<div className="col-span-1">
						<div className="aspect-square h-full w-full">
							<Avatar />
						</div>
					</div>
					<div className="col-span-2 flex flex-col justify-center">
						<h1
							className="text-8xl font-merriweather font-black text-foreground text-center sm:text-left uppercase z-20"
							style={{ textShadow: '10px 10px 0px black' }}
						>
							Hello! <br />I am
							<br /> Mykhailo Kondrat
							<span className="text-accent">.</span>
						</h1>
					</div>
					<div className="col-span-2 col-start-2 flex flex-col items-left z-20">
						<p className="text-2xl font-merry text-foreground text-left my-5">
							Passionate software engineer, former UI/UX designer. <br />
							Currently working at{' '}
							<a href="https://www.ericsson.com" className="text-accent">
								Ericsson
							</a>
							.
						</p>

						<div className="flex items-center gap-4 text-foreground mt-4">
							<a
								href="https://github.com/MykhailoKondrat"
								className="text-accent hover:cursor-pointer"
							>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
									alt="GitHub"
									className="inline-block w-6 h-6 invert"
								/>
							</a>
							<a
								href="/Mykhailo Kondrat resume.pdf"
								download
								className="px-4 py-2 bg-background text-accent rounded-full hover:bg-accent hover:text-white hover:cursor-pointer border border-accent"
							>
								Download Resume
							</a>

							<a
								href="mailto:mykhailo.kondrat@gmail.com"
								className="px-4 py-2 bg-background text-accent rounded-full hover:bg-accent hover:text-white hover:cursor-pointer border border-accent"
							>
								Send me a message
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
