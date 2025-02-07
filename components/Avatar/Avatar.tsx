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
			<div className="custom-avatar overflow-hidden full-rounded" />
		</>
	);
};
