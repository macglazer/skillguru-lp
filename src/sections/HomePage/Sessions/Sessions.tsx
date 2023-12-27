// Libraries
import React, {useMemo, useState} from 'react';
import {Link} from 'gatsby';
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
	const flippedCards = [
		{
			title: (
				<>
					Przygotowanie <br />
					do rozmowy <br />o pracę
				</>
			),
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
			title: (
				<>
					Praca nad
					<br /> Twoim CV
				</>
			),
			icon: <CV />,
			color: '#E985A4',
			content: {
				title: 'Informacja o tej sesji',
				text:
					'Nadchodzą kluczowe rozmowy rekrutacyjne? Rekrutację cię stresują? W ciągu tej jednogodzinnej konsultacji, mentor z bogatym doświadczeniem w procesach rekrutacyjnych wystąpi w roli eksperta technicznego. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi. Zadając ci charakterystyczne pytania rekrutacyjne, które mogą pojawić się podczas rzeczywistych rozmów kwalifikacyjnych, oceni on Twoje odpowiedzi.',
				link: '/',
			},
		},
		{
			title: (
				<>
					Konsultacja z <br />
					ekspertem
				</>
			),
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
			title: <span style={{paddingTop: '15px'}}>Plan na naukę</span>,
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

	return (
		<Container as={Tag.Section} classes={styles.wrapper}>
			<Title
				tag={TitleTag.h2}
				variant={TitleVariant.section}
				classes={styles.title}>
				Sesje 1:1 z Mentorem
			</Title>
			<Text classes={styles.text}>
				Jeżeli nie jesteś pewien, czy mentoring jest dla Ciebie, zarezerwuj mentora na pojpdyńczą sesję 1:1 i{' '}
				<strong>uzyskaj wsparcie na ważne tematy, które Cię interesują</strong>
			</Text>
			<div className={styles.cardsWrapper}>
				{flippedCards.map((item, index) => (
					<FlippedCard key={index} {...item} />
				))}
			</div>
			<Link className={styles.more} to='/'>
				Zobacz więcej
			</Link>
		</Container>
	);
};

export default Sessions;
