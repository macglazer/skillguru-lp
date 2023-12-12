// Libraries
import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
// Components
import Container from '@components/Container/Container';
import {Title, Text} from '@components/typography';
import Button from '@components/Button/Button';
// Types
import {Tag} from '@customTypes/tags';
import {TitleTag, TitleVariant} from '@components/typography/Title/Title';
import {FontColors} from '@customTypes/main';
// Styles
import * as styles from './Header.module.scss';

const Header = () => {
	return (
		<Container as={Tag.Header} classes={styles.header}>
			<div className={styles.headerImage}>
		 <StaticImage src={'../../../assets/images/hand.png'} alt='Ręka' />
			</div>
			<div className={styles.headerContent}>
				<Title
					tag={TitleTag.h1}
					variant={TitleVariant.main}
					color={FontColors.light} classes={styles.headerTitle}>
					<span data-color={FontColors.yellow}>Sieć doświadczonych ekspertów</span> i
					zawodowo spełnionych biznesowych mentorów na żądanie.
				</Title>
				<Text color={FontColors.light}>
					Niezależnie od tego, czy współpracujesz z konkretnym ekspertem, czy szukasz
					informacji od wielu mentorów, Twoja sieć natychmiast staje się silniejsza.
					Wszyscy eksperci Skillguru są sprawdzani i mają udokumentowane
					doświadczenie jako odnoszący sukcesy eksperci i profesjonaliści w swoich
					branżach.
				</Text>
				<div className={styles.headerCta}>
					<Button>Znajdź Mentorów</Button>
					<Link className={styles.headerLink} to='/'>
						Czytaj więcej
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Header;
