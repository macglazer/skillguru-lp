// Libraries
import React, {useEffect, useMemo, useState} from 'react';
import Slider from 'react-slick';
// Components
import SectionWrapper from '@components/SectionWrapper/SectionWrapper';
import MentorSmallCard, {
	MentorSmallCardProps,
} from '@components/Cards/MentorSmallCard/MentorSmallCard';
// Hooks
import useWindowSize from '@hooks/useWindowSize';
// Styles
import * as styles from './Mentors.module.scss';

const Mentors = () => {
	const [mentorsList, setMentorsList] = useState<MentorSmallCardProps[]>([]);

	const {width} = useWindowSize();

	const settings = useMemo(
		() => ({
			dots: false,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: width / 297,
			slidesToScroll: 1,
		}),
		[width]
	);

	useEffect(() => {
		// TODO: Download Data from API
		setMentorsList(
			Array(20).fill({
				id: Math.random(),
				range: 9,
				name: 'Jan Kielwczyk',
				position: 'Software developer with Java',
				companyLogo:
					'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png',
				companyName: 'Test',
				profileImg:
					'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
			})
		);
	}, []);

	return (
		<SectionWrapper title='Profile Mentorów'>
			<Slider {...settings} className={styles.mentors}>
				{mentorsList.map((item) => (
					<MentorSmallCard key={item.id} {...item} />
				))}
			</Slider>
		</SectionWrapper>
	);
};

export default Mentors;
