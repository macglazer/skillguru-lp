// Libraries
import React from 'react';
// Components
import {Title} from '@components/typography';
// Types
import {TitleTag, TitleVariant} from '@components/typography/Title/Title';
// Styles
import * as styles from './NumCard.module.scss';

interface NumCardProps {
	icon: React.ReactNode;
	title: string;
	text: string;
	index: number;
	color: string;
}

const NumCard = (props: NumCardProps) => {
	const {icon, title, text, index, color} = props;

	return (
		<div
			className={styles.card}
			style={{'--num-card-color': color} as React.CSSProperties}>
			<div className={styles.cardContent}>
				<div className={styles.cardIcon}>{icon}</div>
				<Title classes={styles.cardTitle} variant={TitleVariant.standard} tag={TitleTag.h3}>
					{title}
				</Title>
				<p className={styles.cardText}>{text}</p>
				<span className={styles.cardIndex}>{index}</span>
			</div>
		</div>
	);
};

export default NumCard;
