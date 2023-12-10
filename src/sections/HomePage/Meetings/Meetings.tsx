// Libraries
import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';
// Components
import SectionWrapper, {
	SectionWrpperColor,
} from '@components/SectionWrapper/SectionWrapper';
import {Title, Text} from '@components/typography';
// Hooks
import useImage from '@hooks/useImage';
// Types
import {TitleTag, TitleVariant} from '@components/typography/Title/Title';
import {FontColors} from '@customTypes/main';
// Styles
import * as styles from './Meetings.module.scss';

const Meetings = () => {
	const {steps, pricing} = useImage();

	return (
		<SectionWrapper
			title='Cykl spotkań - Mentoring'
			bgColor={SectionWrpperColor.Dark}
			classes={styles.meetings}>
			<div className={styles.container}>
				<div className={styles.content}>
					<Title
						tag={TitleTag.h3}
						variant={TitleVariant.section}
						color={FontColors.light}>
						Skorzystaj z <span data-color={FontColors.green}>Mentoringu:</span>
					</Title>
					<Text color={FontColors.light}>
						Mentorowanie może być satysfakcjonujące i stanowić formę rozwoju
						osobistego. Niektórzy eksperci chcą dzielić się swoją wiedzą i pomagać
						innym.
					</Text>
				</div>
				<div className={styles.steps}>
					<GatsbyImage image={steps} alt='kroki' />
				</div>
				<div className={styles.pricing}>
					<GatsbyImage image={pricing} alt='ceny' />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Meetings;
