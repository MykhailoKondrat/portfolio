import { SocialIcon } from 'react-social-icons';
export const Links: React.FC = () => (
	<div className="flex items-center gap-4 text-foreground mt-4 h-12 max-lg:flex-col max-lg:justify-center max-lg:align-center max-lg:mt-12">
		<div className="flex gap-4">
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

			<SocialIcon
				url="https://www.upwork.com/freelancers/~010f165130d3091cba?mp_source=share"
				bgColor="rgb(249, 115, 22)"
				style={{ height: 40, width: 40 }}
			/>
		</div>
		<div className="flex gap-4 w-full max-lg:flex-col max-lg:justify-center max-lg:align-center max-lg:text-center">
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
);
