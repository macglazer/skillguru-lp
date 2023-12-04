// Libraries
import React from 'react';
import classNames from 'classnames';
// Types
import {Common} from '@customTypes/main';

export enum TitleTag {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
}

export enum TitleVariant {
	main = 'title--main',
	section = 'title--section',
	sectionSubtitle = 'section-subtitle',
	standard = 'title--standard',
}

interface Title extends Common {
	tag: TitleTag;
	variant: TitleVariant;
}

const SectionTitle = (props: Title) => {
	const {classes, id, children, tag: Tag, variant} = props;

	return (
		<Tag id={id} className={classNames('title', variant, classes)}>
			{children}
		</Tag>
	);
};

export default SectionTitle;
