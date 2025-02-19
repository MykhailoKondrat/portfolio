'use client';
import React from 'react';
import './Avatar.css';
import Tilt from 'react-parallax-tilt';

interface AvatarProps {
	src?: string;
	alt?: string;
	size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({}) => {
	return (
		<>
			<div className="pointer-events-none absolute z-[6] flex justify-center items-center w-[calc(30vw+2px)] h-[calc(30vw+2px)]">
				<div
					className="animate-fadeIn opacity-0 animation-delay-400 custom-avatar z-[5] bg-background bg-center bg-contain bg-no-repeat flex h-[30vw] 
			items-center justify-center overflow-hidden relative rounded-full 
			w-[30vw] shadow-sm"
				/>
				<div
					className="animate-fadeIn shadow-lg opacity-0  animation-delay-500  absolute z-[4] w-[calc(30vw+2px)] h-[calc(30vw+2px)] rounded-full bg-gradient-to-br from-purple-500 to-green-500
"
				/>
			</div>
			<Tilt
				className="relative z-[5] hover-group "
				tiltMaxAngleX={5}
				tiltMaxAngleY={5}
				perspective={1000}
				scale={1.05}
			>
				<div className="relative flex justify-center items-center w-[calc(30vw+2px)] h-[calc(30vw+2px)]">
					<div className="animate-grow avatar-circle  z-[3]  w-[48vw] h-[48vw] shadow-md" />
					<div className="animate-bounceGrow opacity-0 avatar-circle animation-delay-500 z-[2]  w-[78vw] h-[78vw] border-accent " />
					<div className="animate-grow avatar-circle  noise w-[127vw] h-[127vw] shadow-lg" />
				</div>
			</Tilt>
		</>
	);
};
