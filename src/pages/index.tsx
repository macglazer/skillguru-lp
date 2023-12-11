// Libraries
import * as React from 'react';
import type {HeadFC, PageProps} from 'gatsby';
// Components
import Container from '@components/Container/Container';
// Sections
import Header from '@sections/HomePage/Header/Header';
import HowItWorks from '@sections/HomePage/HowItWorks/HowItWorks';
import Sessions from '@sections/HomePage/Sessions/Sessions';
import Mentors from '@sections/HomePage/Mentors/Mentors';
import Meetings from '@sections/HomePage/Meetings/Meetings';
import About from '@sections/HomePage/About/About';
// Types
import {Tag} from '@customTypes/tags';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<Header />
			<Container as={Tag.Main}>
				<HowItWorks />
				<Sessions />
				<Meetings />
				<Mentors />
				<About />
			</Container>
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>Home Page</title>
		<link
			rel='stylesheet'
			type='text/css'
			charSet='UTF-8'
			href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
		/>
		<link
			rel='stylesheet'
			type='text/css'
			href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
		/>
	</>
);
