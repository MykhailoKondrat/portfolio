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
			<div className="relative flex justify-center items-center w-[calc(30vw+2px)] h-[calc(30vw+2px)]">
				<div className="custom-avatar overflow-hidden full-rounded bg-background" />
				<div className="absolute z-[4] w-[calc(30vw+2px)] h-[calc(30vw+2px)] rounded-full bg-gradient-to-br from-purple-500 to-green-500 " />
				<div className="avatar-circle  z-[3]  bg-background w-[48vw] h-[48vw]" />
				<div className="avatar-circle  z-[2] bg-background w-[78vw] h-[78vw] border-accent shadow-[10px_10px_30px_rgba(0,0,0,0.5)] " />
				<div className="avatar-circle bg-transparent noise w-[127vw] h-[127vw] shadow-[10px_10px_30px_rgba(0,0,0,0.5)]" />
			</div>
		</>
	);
};
