// Libraries
import React from 'react';
import {Link} from 'gatsby';
// Components
import {Text} from '@components/typography';
// Styles
import * as styles from './FooterLinks.module.scss';
// Types
import {FontColors} from '@customTypes/main';

interface FooterLinksProps {
	title: string;
	links: {id: string; text: string; link: string}[];
}

const FooterLinks = (props: FooterLinksProps) => {
	const{title, links} = props

	return (
		<div className={styles.footerLinks}>
			<Text classes={styles.footerLinksTitle} color={FontColors.light}>
				<strong>{title}</strong>
			</Text>
			<ul className={styles.footerLinksList}>
				{links.map(({link, text, id}) => (
					<li key={id}>
						<Link to={link}>
							<Text as='span'>{text}</Text>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterLinks;
