import { Avatar } from '@/components';
import { Description, Headline } from './sections';
export default function About() {
	return (
		<div className="group [max-h-[100vh] overflow-y-hidden h-[100vh] pt-40">
			<div className="max-w-[75%] w-[75%] mx-auto  h-[100%]">
				<div className="flex flex-col gap-8 items-center sm:items-start">
					<div className="grid grid-cols-3 gap-4 w-full grid-rows-[auto_1fr]">
						<div className="col-span-1 max-lg:col-start-2 max-lg:place-self-center ">
							<div className="aspect-square h-full w-full">
								<Avatar />
							</div>
						</div>
						<Headline />
						<Description />
					</div>
				</div>
			</div>
		</div>
	);
}
