// Libraries
import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby';
// Components
import Button, {ButtonVariant} from '@components/Button/Button';
// Icons
import {Close, CookieSvg} from '@icons/_index';
// Styles
import * as styles from './Cookies.module.scss';

const Cookies = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setVisible(true), 5000);
	}, []);

	const acceptCookiesHandler = (value: boolean) => {
		setVisible(false);
		localStorage?.setItem('cookiesPolicyAccepted_skillguru', value.toString());
	};

	return (
		<aside className={styles.cookies} data-is-visible={visible}>
			<button
				className={styles.cookiesBtn}
				onClick={() => setVisible(false)}
				aria-label='Zamknij'>
				<Close />
			</button>
			<div className={styles.cookiesContent}>
				<CookieSvg />
				<p className={styles.cookiesText}>
					Klikając „Akceptuję”, zgadzasz się na przechowywanie plików cookie na swoim
					urządzeniu w celu usprawnienia nawigacji w witrynie, analizy korzystania z
					witryny i pomocy w naszych działaniach marketingowych. Możesz dowiedzieć
					się więcej na ten temat na stronie{' '}
					<Link to='/polityka-prywatnosci'>polityka prywatności.</Link>.
				</p>
			</div>
			<div className={styles.cookiesActions}>
				<Button onClick={() => acceptCookiesHandler(true)}>Ok</Button>
				<Button variant={ButtonVariant.Outline} onClick={() => acceptCookiesHandler(true)}>
					Odruć wszystkie
				</Button>
			</div>
		</aside>
	);
};

export default Cookies;
