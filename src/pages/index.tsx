import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';

import Container from '@components/Container/Container';
import {Tag} from '@customTypes/tags';
import Button, {ButtonVariant} from '@components/Button/Button';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Container as={Tag.Main}>
			<Button>asd</Button>
			<Button variant={ButtonVariant.Dark}>asd</Button>
			<Button variant={ButtonVariant.Light}>asd</Button>
			<Button variant={ButtonVariant.Outline}>asd</Button>
		</Container>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
