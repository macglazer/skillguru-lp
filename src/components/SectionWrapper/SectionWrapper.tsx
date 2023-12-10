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
	Dark = 'dark',
	Gray = 'gray',
}

interface SectionWrapperProps extends Common {
	as?: Tag;
	bgColor?: SectionWrpperColor;
	title: string;
	text?: React.ReactNode;
}

const SectionWrapper = (props: SectionWrapperProps) => {
	const {
		as = Tag.Section,
		children,
		title,
		bgColor = SectionWrpperColor.Gray,
		text,
		classes,
	} = props;

	return (
		<Container
			as={as}
			classes={classNames(styles.wrapper, classes, {
				[styles.wrapperGray]: bgColor === SectionWrpperColor.Gray,
				[styles.wrapperSecondary]: bgColor === SectionWrpperColor.Secondary,
				[styles.wrapperDark]: bgColor === SectionWrpperColor.Dark,
			})}>
			<Title
				tag={TitleTag.h2}
				variant={TitleVariant.section}
				color={
					bgColor === SectionWrpperColor.Gray ? FontColors.dark : FontColors.light
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
