'use client';
import { Avatar } from '@/components';
import { SocialIcon } from 'react-social-icons';
export default function Home() {
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
							className="text-7xl font-merriweather font-black text-foreground text-center sm:text-left uppercase z-20"
							style={{ textShadow: '10px 10px 0px black' }}
						>
							Hello! <br />I am
							<br /> Mykhailo Kondrat
							<span className="text-accent">.</span>
						</h1>
					</div>
					<div className="col-span-2 col-start-2 flex flex-col items-left z-20">
						<p className="text-2xl font-merry text-foreground text-left my-5">
							Passionate software engineer and former UI/UX designer. <br />
							Currently working at{' '}
							<a href="https://www.ericsson.com" className="text-accent">
								Ericsson
							</a>
							.
						</p>

						<div className="flex items-center gap-4 text-foreground mt-4 h-12">
							<SocialIcon
								url="https://github.com/MykhailoKondrat"
								bgColor="rgb(249, 115, 22)"
								style={{ height: 40, width: 40 }}
							/>
							<SocialIcon
								url="https://www.linkedin.com/in/mykhailo-kondrat/"
								bgColor="rgb(249, 115, 22)"
								style={{ height: 40, width: 40 }}
							/>
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
