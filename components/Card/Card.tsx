import React from 'react';
import './card.css';
interface CardProps {
	children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
	return <div className="custom-card">{children}</div>;
};

export default Card;
