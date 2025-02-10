export const Headline: React.FC = () => (
	<div className="col-span-2 flex flex-col justify-center max-lg:col-span-3">
		<h1
			className="text-8xl font-merriweather font-black text-foreground text-center sm:text-left uppercase z-20 max-lg:text-center max-lg:text-4xl"
			style={{
				textShadow: '10px 10px 0px black',
			}}
		>
			Hello!
			<br className="max-lg:hidden" />
			I am
			<br />
			Mykhailo Kondrat
			<span className="text-accent">.</span>
		</h1>
	</div>
);
