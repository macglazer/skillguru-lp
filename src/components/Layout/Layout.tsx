// Libraries
import React from 'react';
// Components
import Footer from './components/Foooter/Footer';
import Navbar from './components/Navbar/Navbar';
// Styles
import * as styles from './Layout.module.scss';

const Layout = (props: {children: any}) => {
	return (
		<>
			<Navbar />
			<div className={styles.spacer} />
			{props.children}
			<Footer />
		</>
	);
};

export default Layout;
