import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';

import Container from '@components/Container/Container';
import SectionWrapper from '@components/SectionWrapper/SectionWrapper';
import {Tag} from '@customTypes/tags';
import Button, {ButtonVariant} from '@components/Button/Button';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Container as={Tag.Main}>
			<SectionWrapper title='Test'>
				<Button>asd</Button>
				<Button variant={ButtonVariant.Dark}>asd</Button>
				<Button variant={ButtonVariant.Light}>asd</Button>
				<Button variant={ButtonVariant.Outline}>asd</Button>
			</SectionWrapper>
		</Container>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
