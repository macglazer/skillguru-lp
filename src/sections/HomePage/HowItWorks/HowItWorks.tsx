// Libraries
import React from 'react';
// Components
import SectionWrapper from '@components/SectionWrapper/SectionWrapper';
import NumCard from '@components/Cards/NumCard/NumCard';
// Icons
import {Tap, Idea, Conversation} from '@icons/_index';
// Styles
import * as styles from './HowItWorks.module.scss';

const HowItWorks = () => {
	const numCards = [
		{
			title: 'Wyszukaj Mentora',
			text:
				'From liquid damage to cracked screens, we provides high-quality, affordable repair services',
			icon: <Tap />,
			color: '#E17596',
		},
		{
			title: 'Umów Spotkanie',
			text: 'Rozmawiaj twarzą w twarz podczas rozmów wideo 1:1 lub 1:3',
			icon: <Conversation />,
			color: '#64A1F2',
		},
		{
			title: 'Rozwijaj Umiejętności',
			text:
				'Podziel się swoimi wyzwaniami w bezpiecznym i poufnym środowisku i wytycz drogę do sukcesu.',
			icon: <Idea />,
			color: '#80CCAB',
		},
	];
	return (
		<SectionWrapper
			title='Jak to działa?'
			text={
				<>
					Prosty <strong>proces odnajdywania mentorów </strong>i zyskiwania wsparcia.
				</>
			}>
			<div className={styles.cardsWrapper}>
				{numCards.map((item, index) => (
					<NumCard key={index} index={index + 1} {...item} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default HowItWorks;
