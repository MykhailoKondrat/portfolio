'use client';
import React from 'react';
import './Avatar.css';

export const Avatar: React.FC = () => (
	<>
		<div className="pointer-events-none animate-fadeInBlurScale absolute z-[6] flex justify-center items-center w-[calc(30vw+2px)] h-[calc(30vw+2px)]">
			<div
				className=" animation-delay-400 custom-avatar z-[5] bg-background bg-center bg-contain bg-no-repeat flex h-[30vw] 
			items-center justify-center overflow-hidden relative rounded-full 
			w-[30vw] shadow-sm"
			/>
			<div
				className="animate-fadeIn shadow-lg opacity-0  animation-delay-500  absolute z-[4] w-[calc(30vw+2px)] h-[calc(30vw+2px)] rounded-full bg-gradient-to-br from-purple-500 to-green-500
"
			/>
		</div>
	</>
);
