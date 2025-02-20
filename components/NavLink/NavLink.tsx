'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<div className="group uppercase text-center w-full hover:text-accent relative">
			<Link href={href}>{children}</Link>
			{isActive && (
				<div
					className={clsx(
						'h-[4px]  mt-1 w-full bg-foreground rounded group-hover:bg-accent absolute top-8',
						isActive ? 'animate-scaleWidthIn-100' : 'animate-scaleWidthOut'
					)}
				/>
			)}
		</div>
	);
};

export default NavLink;
