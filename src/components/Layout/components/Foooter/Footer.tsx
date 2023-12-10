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
			title: 'Kategoria',
			links: [
				{
					id: 'l01',
					text: 'test',
					link: '/',
				},
			],
		},
		{
			title: 'Jak to działa?',
			links: [
				{
					id: 'l01',
					text: 'test',
					link: '/',
				},
			],
		},
		{
			title: 'O nas',
			links: [
				{
					id: 'l01',
					text: 'test',
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
