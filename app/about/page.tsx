import { Avatar } from '@/components';
import { Description, Headline } from './sections';
import { Links } from './sections/Links';
import { Circles } from '@/components/Circles';
export default function About() {
	return (
		<div className="group [max-h-[100vh] overflow-y-hidden h-[100vh] w-full pt-40">
			<div className="max-w-[85%] w-[85%] mx-auto h-[100%]">
				<div className="flex flex-col gap-8 items-center max-lg:ml-0 ml-[12vw] sm:items-start">
					<div className="grid grid-cols-3 gap-4 w-full grid-rows-[auto_1fr]">
						<div className="col-span-1 max-lg:col-start-2 max-lg:place-self-center ">
							<div className="aspect-square h-full w-full">
								<Avatar />
								<Circles />
							</div>
						</div>
						<Headline />
						<Description />

						<div className="col-span-2 col-start-2 flex flex-col items-left z-20 max-lg:col-span-3">
							<Links />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
