// Libraries
import React from 'react';
// Components
import Container from '@components/Container/Container';
import {Title, Text} from '@components/typography';
// Types
import {Tag} from '@customTypes/tags';
import {TitleTag, TitleVariant} from '@components/typography/Title/Title';
// Styles
import * as styles from './WriteToMentor.module.scss';
import {FontColors} from '@customTypes/main';

const WriteToMentor = () => {
	return (
		<Container as={Tag.Section} classes={styles.wrapper}>
			<Title
				tag={TitleTag.h2}
				variant={TitleVariant.section}
				color={FontColors.light} classes={styles.title}>
				Napisz do swojego mentora
			</Title>
			<ul className={styles.list}>
				<li>
					<Text as='span' color={FontColors.light}>
						<strong>Wysyłaj wiadomości przed i po połączeniach.</strong> Uzyskaj
						dostęp do swoich wiadomości w dowolnym momencie na komputerze stacjonarnym
						lub urządzeniu mobilnym.
					</Text>
				</li>
				<li>
					<Text as='span' color={FontColors.light}>
						<strong>Udostępnij plan działania i tematy do omówienia</strong> lub
						prześlij pliki do przeglądu, aby Mentor mógł lepiej się przygotować do
						spotkania.
					</Text>
				</li>
				<li>
					<Text as='span' color={FontColors.light}>
						<strong>Chcesz więcej?</strong> Ustal mentoring i wyznaczaj kamienie
						milowe i omawiaj postępy pomiędzy rozmowami. Skillguru utrzymuje wszystko
						na jednej platformie, dzięki czemu Twoja rozmowa jest zawsze bezpieczna i
						poufna.
					</Text>
				</li>
			</ul>
		</Container>
	);
};

export default WriteToMentor;
