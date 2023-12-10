// Libraries
import React, {useMemo, useState} from 'react';
// Components
import Container from '@components/Container/Container';
import {Title, Text} from '@components/typography';
import FlippedCard from '@components/Cards/FlippedCard/FlippedCard';
// Types
import {Tag} from '@customTypes/tags';
import {TitleVariant, TitleTag} from '@components/typography/Title/Title';
import {CV, Care, Message, Thinking} from '@icons/_index';
// Styles
import * as styles from './Sessions.module.scss';

const Sessions = () => {
	const [maxCards, setMaxCards] = useState(4);
	const flippedCards = [
		{
			title: 'test',
			icon: <Thinking />,
			color: '#92BDF6',
			content: {
				title: 'Informacja o tej sesji',
				text:
					'Nadchodzą kluczowe rozmowy rekrutacyjne? Rekrutację cię stresują? W ciągu tej jednogodzinnej konsultacji, mentor z bogatym doświadczeniem w procesach rekrutacyjnych wystąpi w roli eksperta technicznego. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi.',
				link: '/',
			},
		},
		{
			title: 'Praca nad Twoim CV',
			icon: <CV />,
			color: '#E17596',
			content: {
				title: 'Informacja o tej sesji',
				text:
					'Nadchodzą kluczowe rozmowy rekrutacyjne? Rekrutację cię stresują? W ciągu tej jednogodzinnej konsultacji, mentor z bogatym doświadczeniem w procesach rekrutacyjnych wystąpi w roli eksperta technicznego. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi.',
				link: '/',
			},
		},
		{
			title: 'Konsultacja z ekspertem',
			icon: <Message />,
			color: '#F0DA69',
			content: {
				title: 'Informacja o tej sesji',
				text:
					'Nadchodzą kluczowe rozmowy rekrutacyjne? Rekrutację cię stresują? W ciągu tej jednogodzinnej konsultacji, mentor z bogatym doświadczeniem w procesach rekrutacyjnych wystąpi w roli eksperta technicznego. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi.',
				link: '/',
			},
		},
		{
			title: 'Plan na naukę',
			icon: <Care />,
			color: '#A3DAC3',
			content: {
				title: 'Informacja o tej sesji',
				text:
					'Nadchodzą kluczowe rozmowy rekrutacyjne? Rekrutację cię stresują? W ciągu tej jednogodzinnej konsultacji, mentor z bogatym doświadczeniem w procesach rekrutacyjnych wystąpi w roli eksperta technicznego. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi.',
				link: '/',
			},
		},
	];

	const isMoreToLoad: boolean = useMemo(
		() => flippedCards.length > maxCards,
		[flippedCards, maxCards]
	);

	const loadMoreHandler = (): void => {
		if (!isMoreToLoad) return;

		setMaxCards(maxCards + 4);
	};

	return (
		<Container as={Tag.Section} classes={styles.wrapper}>
			<Title
				tag={TitleTag.h2}
				variant={TitleVariant.section}
				classes={styles.title}>
				Sesje 1:1 z Mentorem
			</Title>
			<Text classes={styles.text}>
				Zarezerwuj mentora na eojpdyńczą sesję 1:1 i{' '}
				<strong>uzyskaj wsparcie na ważne tematy, które Cię interesują</strong>
			</Text>
			<div className={styles.cardsWrapper}>
				{flippedCards.map((item) => (
					<FlippedCard key={item.title} {...item} />
				))}
			</div>
			{isMoreToLoad && (
				<button className={styles.more} onClick={loadMoreHandler}>
					Zobacz więcej
				</button>
			)}
		</Container>
	);
};

export default Sessions;
