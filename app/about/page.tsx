import { Avatar } from '@/components';
import { Description, Headline } from './sections';
export default function About() {
	return (
		<div className="max-h-[100vh] overflow-y-hidden h-[100vh]">
			<div className="max-w-[75%] w-[75%] mx-auto  h-[100%]">
				<main className="flex flex-col gap-8 items-center sm:items-start">
					<div className="grid grid-cols-3 gap-4 w-full grid-rows-[auto_1fr]">
						<div className="col-span-3 center p-3 z-[6]">
							<p className="font-merriweather text-foreground text-left max-lg:text-center ">
								kondrat<span className="text-accent">.dev /</span>
							</p>
						</div>
						<div className="col-span-1 max-lg:col-start-2 max-lg:place-self-center ">
							<div className="aspect-square h-full w-full">
								<Avatar />
							</div>
						</div>
						<Headline />
						<Description />
					</div>
				</main>
			</div>
		</div>
	);
}
