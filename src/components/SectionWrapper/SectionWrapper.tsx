// Libraires
import React from 'react';
import classNames from 'classnames';
// Components
import Container from '@components/Container/Container';
import {Text, Title} from '@components/typography';
// Styles
import * as styles from './SectionWrapper.module.scss';
// Types
import {Common, FontColors} from '@customTypes/main';
import {Tag} from '@customTypes/tags';
import {TitleTag, TitleVariant} from '@components/typography/Title/Title';

export enum SectionWrpperColor {
	Secondary = 'secondary',
	Gray = 'gray',
}

interface SectionWrapperProps extends Common {
  as?: Tag;
	bgColor?: SectionWrpperColor;
	title: string;
	text?: string;
}

const SectionWrapper = (props: SectionWrapperProps) => {
	const {
		as = Tag.Section,
		children,
		title,
		bgColor = SectionWrpperColor.Gray,
		text,
	} = props;

	return (
		<Container
			as={as}
			classes={classNames(styles.wrapper, {
				[styles.wrapperGray]: bgColor === SectionWrpperColor.Gray,
				[styles.wrapperSecondary]: bgColor === SectionWrpperColor.Secondary,
			})}>
			<Title
				tag={TitleTag.h2}
				variant={TitleVariant.section}
				color={
					bgColor === SectionWrpperColor.Secondary
						? FontColors.light
						: FontColors.dark
				}
				classes={styles.wrapperTitle}>
				{title}
			</Title>
			{text && <Text classes={styles.wrapperText}>{text}</Text>}
			{children}
		</Container>
	);
};

export default SectionWrapper;
