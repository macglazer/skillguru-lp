// Libraries
import React from 'react';
// Components
import {Text} from '@components/typography';
import SocialMedia from '../SocialMedia';
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
				<a href='http://' target='_blank' rel='noopener noreferrer'>
					Adres siedziby
				</a>
				<a href='tel:+'>+48 000 000 000</a>
				<a href='mailto:'>info@skillguru.pl</a>
			</Text>
			<SocialMedia />
		</div>
	);
};

export default FooterData;
