// Libraries
import React, {useState} from 'react';
import {Link} from 'gatsby';
// Styles
import * as styles from '../../Navbar.module.scss'

interface LinkProps {
	text: string;
	link: string;
	isHiglited?: boolean;
}

export interface NavbarItemProps extends LinkProps {
	children?: LinkProps[];
	toggleExpandHandler: () => void;
}

const NavbarItem = (props: NavbarItemProps) => {
	const {text, link, children, isHiglited, toggleExpandHandler} = props;
	const [isExpanded, setIsExpanded] = useState(false);

	const expandHandler = () => setIsExpanded(!isExpanded);

	return (
		<li className={styles.navbarMenuItem} data-is-higlited={isHiglited}>
			{!!link ? (
				<Link
					onClick={() => {
						if (!!children?.length) {
							expandHandler();
						} else {
							toggleExpandHandler();
						}
					}}
					to={link}>
					{text}
				</Link>
			) : (
				<span
					onClick={() => {
						if (!!children?.length) {
							expandHandler();
						} else {
							toggleExpandHandler();
						}
					}}>
					{text}
				</span>
			)}
			{!!children?.length && (
				<ul className={styles.navbarSubmenu} data-is-expanded={isExpanded}>
					{children.map(({text, link}, index) => (
						<li key={text.slice(3) + index} className={styles.navbarSubmenuItem}>
							<Link onClick={toggleExpandHandler} to={link}>
								{text}
							</Link>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default NavbarItem;
