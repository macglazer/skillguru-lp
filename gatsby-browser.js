// Libraries
import React from 'react';
// Components
import Layout from '@components/Layout/Layout'
// Styles
import '@styles/main.scss';

export const wrapPageElement = ({element}) => {
	return <Layout>{element}</Layout>;
};
