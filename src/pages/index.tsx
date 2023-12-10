// Libraries
import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
// Components
import Container from '@components/Container/Container';
// Sections
import Header from '@sections/HomePage/Header/Header';
import HowItWorks from '@sections/HomePage/HowItWorks/HowItWorks';
// Types
import {Tag} from '@customTypes/tags';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<Header />
			<Container as={Tag.Main}>
				<HowItWorks />
			</Container>
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
