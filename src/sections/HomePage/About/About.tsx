// Libraries
import React from 'react';
// Components
import Container from '@components/Container/Container';
import {Title, Text} from '@components/typography';
import Button, {ButtonTag, ButtonVariant} from '@components/Button/Button';
// Hooks
import useImage from '@hooks/useImage';
// Types
import {Tag} from '@customTypes/tags';
import {TitleTag, TitleVariant} from '@components/typography/Title/Title';
// Styles
import * as styles from './About.module.scss';
import {StaticImage} from 'gatsby-plugin-image';

const About = () => {
	return (
		<Container as={Tag.Section} classes={styles.about}>
			<div className={styles.header}>
				<Title tag={TitleTag.h2} variant={TitleVariant.section}>
					O skillguru
				</Title>
				<Text>
					Prosty <strong>proces odnajdywania mentorów</strong> i zyskiwania wsparcia.
				</Text>
			</div>
			<div className={styles.content}>
				<Text>
					<strong>
						Celem aplikacji 'skillguru' jest stworzenie innowacyjnej platformy
						mentoringowej,
					</strong>{' '}
					dostępnej dla osób dorosłych, które pragną{' '}
					<strong>rozwijać swoje kompetencje zawodowe,</strong> zgłębiać nowe
					dziedziny lub znaleźć wsparcie od doświadczonych mentorów w okresie swojego
					zawodowego rozwoju.
					<br />
					<br />W odróżnieniu od tradycyjnych platform korepetycyjnych,{' '}
					<strong>
						'skillguru' skupia się na zapewnieniu wyjątkowego miejsca, gdzie osoby
						dorosłe mogą doskonalić już posiadane umiejętności lub zdobyć nowe, dzięki
						bezpośredniemu wsparciu od doświadczonych mentorów.
					</strong>{' '}
					Aplikacja jest skierowana zarówno do tych, którzy chcą pogłębiać swoją
					wiedzę zawodową, jak i do tych, którzy poszukują inspiracji w swojej
					karierze.
				</Text>
				<Button as={ButtonTag.InternalLink} href='/' classes={styles.contentButton}>
					Poznaj nas
				</Button>
			</div>
			<div className={styles.image}>
				<StaticImage
					src='../../../assets/images/man.png'
					alt='Zadowoleni studenci'
				/>
			</div>
		</Container>
	);
};

export default About;
