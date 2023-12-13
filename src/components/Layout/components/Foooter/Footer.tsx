// Libraries
import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
// Components
import Container from '@components/Container/Container';
import Data from './components/FooterData/FooterData';
import FooterLinks from './components/FooterLinks/FooterLinks';
import {Text} from '@components/typography';
// Types
import {Tag} from '@customTypes/tags';
// Styles
import * as styles from './Footer.module.scss';
import {FontColors} from '@customTypes/main';

const Footer = () => {
	const linkGroups = [
		{
			title: 'Kontakt',
			links: [
				{
					id: 'l01',
					text: 'Napisz do nas',
					link: '/',
				},
				{
					id: 'l02',
					text: 'Zgłoś uwagę',
					link: '/',
				},
				{
					id: 'l03',
					text: 'Team',
					link: '/',
				},
			],
		},
		{
			title: 'Artykuły',
			links: [
				{
					id: 'l01',
					text: 'Blog',
					link: '/',
				},
				{
					id: 'l02',
					text: 'Historie mentorów',
					link: '/',
				},
			],
		},
		{
			title: 'Centrum pomocy',
			links: [
				{
					id: 'l01',
					text: 'Konto i profil',
					link: '/',
				},
				{
					id: 'l02',
					text: 'Płatność i rozliczenia',
					link: '/',
				},
				{
					id: 'l03',
					text: 'Warunki i zasady',
					link: '/',
				},
				{
					id: 'l04',
					text: 'Jak to działa',
					link: '/',
				},
			],
		},
		{
			title: 'Konto',
			links: [
				{
					id: 'l01',
					text: 'Logowanie',
					link: '/',
				},
				{
					id: 'l02',
					text: 'Resetowanie hasła',
					link: '/',
				},
				{
					id: 'l03',
					text: 'Rejestracja',
					link: '/',
				},
				{
					id: 'l04',
					text: 'Aplikuj jako mentor',
					link: '/',
				},
			],
		},
	];

	return (
		<Container as={Tag.Footer} classes={styles.footer}>
			<div className={styles.footerContent}>
				<Data />
				<div className={styles.separator}/>
				{linkGroups.map((item, index) => (
					<FooterLinks key={index} {...item} />
				))}
			</div>

			<Text classes={styles.footerBottom} color={FontColors.light}>
				&copy; {new Date().getFullYear()} Skillguru All right reserved
			</Text>
		</Container>
	);
};

export default Footer;
