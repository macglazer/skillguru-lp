// Libraries
import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import classNames from 'classnames';
// Components
import Container from '@components/Container/Container';
import NavbarItem, {NavbarItemProps} from './components/NavbarItems/NavbarItem';
// Hooks
import useWindowScroll from '@hooks/useWindowScroll';
// Types
import {Tag} from '@customTypes/tags';
// Styles
import * as styles from './Navbar.module.scss'

const Navbar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isScrolled, setisScrolled] = useState(false);
	const scrollY = useWindowScroll();

	const toggleExpandHandler = () => setIsExpanded(!isExpanded);

	const menuItems: NavbarItemProps[] = [
		{
			text: 'Więcej',
			link: '/',
			children: [
				{
					text: 'Blog',
					link: '/',
				},
				{
					text: 'O nas',
					link: '/',
				},
				{
					text: 'O SkillGuru',
					link: '/',
				},
				{
					text: 'Mentorzy',
					link: '/',
				},
			],
			toggleExpandHandler,
		},
		{
			text: 'Zostań Mentorem',
			link: '/',
			isHiglited: 'outline',
			toggleExpandHandler,
		},
		{
			text: 'Zaloguj się',
			link: '/',
			isHiglited: 'primary',
			toggleExpandHandler,
		},
	];

	useEffect(() => {
		setisScrolled(scrollY > 50);
	}, [scrollY]);

	return (
		<Container
			as={Tag.Nav}
			classes={classNames(styles.navbar, {
				[styles.navbarExpanded]: isExpanded,
				[styles.navbarScrolled]: isScrolled,
			})}>
			<Link to={'/'} className='navbar__logo' onClick={() => setIsExpanded(false)}>
				<StaticImage
					src='../../../../assets/images/logo.png'
					alt='Innovate tech solutions'
					loading='lazy'
					placeholder='blurred'
					formats={['auto', 'webp']}
				/>
			</Link>
			<button
				onClick={toggleExpandHandler}
				className={styles.navbarButton}
				aria-label='menu'>
				<span></span>
				<span></span>
			</button>
			<ol className={styles.navbarMenu}>
				{menuItems.map((item) => (
					<NavbarItem key={item.text} {...item} />
				))}
			</ol>
		</Container>
	);
};

export default Navbar;
