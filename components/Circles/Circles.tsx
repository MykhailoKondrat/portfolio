'use client';
import React from 'react';
import './Circles.css';
import Tilt from 'react-parallax-tilt';

export const Circles: React.FC = () => (
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
);
