import NavLink from '../NavLink/NavLink';

export const Menu = () => {
	return (
		<div className="h-[10vh] center p-3 z-[6] fixed flex w-full justify-between items-center px-8 ">
			<p className="font-merriweathe</div>r text-foreground text-left max-lg:text-center h-fit ">
				kondrat<span className="text-accent">.dev /</span>
			</p>
			<nav className="self-end h-full">
				<ul className="flex space-x-8 h-full flex justify-center">
					<li className="flex items-center">
						<NavLink href="/about">About</NavLink>
					</li>
					<li className="flex items-center">
						<NavLink href="/projects">My projects</NavLink>
					</li>
					<li className="flex items-center">
						<NavLink href="/playground">Playground</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};
