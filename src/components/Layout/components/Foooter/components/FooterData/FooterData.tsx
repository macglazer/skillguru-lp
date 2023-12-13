// Libraries
import React from 'react';
// Components
import {Text} from '@components/typography';
import SocialMedia from '../SocialMedia/SocialMedia';
// Types
import {FontColors} from '@customTypes/main';
// Styles
import * as styles from './FooterData.module.scss'

const FooterData = () => {

	return (
		<div>
			<Text classes={styles.footerDataTitle} color={FontColors.light}>
				<strong>Skillguru</strong>
			</Text>
			<Text classes={styles.footerDataText} >
				<a href='http://skillguru.pl' target='_blank' rel='noopener noreferrer'>
					Adres siedziby
				</a>
				<a href='address'>ul. Warsztatowa 14 A</a>
				<a href='address'>Wrocław 50-469</a>
				<a href='nip'>NIP: 498-752-12-11</a>
				<a href='tel:+'>tel: +48 798-771-467</a>
				<a href='mailto:'>info@skillguru.pl</a>
			</Text>
			<SocialMedia />
		</div>
	);
};

export default FooterData;
