import { Links } from './Links';

export const Description: React.FC = () => (
	<div className="col-span-2 col-start-2 flex flex-col items-left z-20 max-lg:col-span-3">
		<p className="delay-400 animate-fadeIn text-2xl font-merry text-foreground text-left my-5 max-lg:text-center max-lg:text-base">
			Passionate software engineer and former UI/UX designer. <br />
			Currently working at{' '}
			<a href="https://www.ericsson.com" className="text-accent">
				Ericsson
			</a>
			.
		</p>
		<Links />
	</div>
);
