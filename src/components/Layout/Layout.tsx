// Libraries
import React, { useEffect, useState } from 'react';
// Components
import Footer from './components/Foooter/Footer';
import Navbar from './components/Navbar/Navbar';
import Cookies from './components/Cookies/Cookies';
// Styles
import * as styles from './Layout.module.scss';

const Layout = (props: {children: any}) => {
	const [showCookie, setShowCookie] = useState(false)

	useEffect(() => {
		setShowCookie(!!!localStorage?.getItem('cookiesPolicyAccepted_skillguru'))
	}, [])


	return (
		<>
			<Navbar />
			{props.children}
			{showCookie && <Cookies />}
			<Footer />
		</>
	);
};

export default Layout;
