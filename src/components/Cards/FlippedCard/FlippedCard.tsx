// Libraries
import React, {useState} from 'react';
import {Link} from 'gatsby';
import classNames from 'classnames';
// Components
import {Title} from '@components/typography';
// Types
import {TitleVariant, TitleTag} from '@components/typography/Title/Title';
// Styles
import * as styles from './FlippedCard.module.scss';

interface FlippedCardProps {
	title: string;
	icon: React.ReactNode;
	color: string;
	content: {
		title: string;
		text: string;
		link: string;
	};
}

const FlippedCard = (props: FlippedCardProps) => {
	const {title, icon, content, color} = props;

	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div
			className={styles.card}
			data-is-flipped={isFlipped}
			style={{'--flip-front-color': color} as React.CSSProperties}>
			<div className={styles.cardContainer}>
				<div className={styles.cardFront}>
					<Title tag={TitleTag.h3} variant={TitleVariant.standard}>
						{title}
					</Title>

					<div className={styles.cardActions}>
						<button
							aria-label='Pokaż opis'
							className={styles.cardBtn}
							onClick={() => setIsFlipped(true)}></button>
						{icon}
					</div>
				</div>
				<div className={styles.cardBack}>
					<div>
						<Title
							tag={TitleTag.h3}
							variant={TitleVariant.standard}
							classes={styles.cardBackTitle}>
							{content.title}
						</Title>
						<p className={styles.cardText}>{content.text}</p>
					</div>
					<div className={styles.cardActions}>
						<button
							aria-label='Pokaż tytuł'
							className={classNames(styles.cardBtn, styles.cardBtnReverse)}
							onClick={() => setIsFlipped(false)}></button>
						<Link
							className={styles.cardLink}
							to={content.link}
							onClick={() => setIsFlipped(false)}>
							Czytaj więcej
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlippedCard;
