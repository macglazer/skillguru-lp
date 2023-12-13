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
			arrows: false,
			draggable: false,
			autoplay: true,
			slidesToShow: width / 232,
			autoplaySpeed: 4000,
			speed: 4000,
			infinite: true,
			pauseOnHover: false,
			cssEase: 'linear',
		}),
		[width]
	);

	useEffect(() => {
		// TODO: Download Data from API
		setMentorsList([
			...Array(5).fill({
				id: Math.random(),
				range: 9,
				name: 'Tester Testowicz',
				position: 'CEO Test',
				companyLogo:
					'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png',
				companyName: 'Test',
				profileImg:
					'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
			}),
			...Array(5).fill({
				id: Math.random(),
				range: 8,
				name: 'Tester Testowicz',
				position: 'Product manager key advisorger key advisor modern',
				companyLogo:
					'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png',
				companyName: 'Test',
				profileImg:
					'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
			}),
		]);
	}, []);

	return (
		<SectionWrapper title='Profile Mentorów' classes={styles.wrapper}>
			<Slider {...settings} className={styles.mentors}>
				{mentorsList.map((item) => (
					<MentorSmallCard key={item.id} {...item} />
				))}
			</Slider>
		</SectionWrapper>
	);
};

export default Mentors;
