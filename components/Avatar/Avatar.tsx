import React from 'react';
import './Avatar.css';

interface AvatarProps {
	src?: string;
	alt?: string;
	size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({}) => {
	return (
		<>
			<div className="relative z-10 w-[calc(30vw+2px)] h-[calc(30vw+2px)] rounded-full bg-gradient-to-br from-purple-500 to-green-500 flex justify-center items-center">
				<div className="custom-avatar overflow-hidden full-rounded bg-background" />
				<div className="avatar-circle w-[48vw] h-[48vw] opacity-30" />
				<div className="avatar-circle w-[78vw] h-[78vw] border-accent opacity-30 shadow-[10px_10px_30px_rgba(0,0,0,0.5)] " />
				<div className="avatar-circle w-[127vw] h-[127vw] opacity-30 shadow-[10px_10px_30px_rgba(0,0,0,0.5)]" />
			</div>
		</>
	);
};
