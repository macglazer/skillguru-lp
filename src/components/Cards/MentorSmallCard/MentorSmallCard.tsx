// Libraries
import React from 'react';
// Styles
import * as styles from './MentroSmallCard.module.scss';

export interface MentorSmallCardProps {
  id: string;
  companyLogo: string;
	companyName: string;
  name: string;
	position: string;
	profileImg: string;
  range: number;
}

const MentorSmallCard = (props: MentorSmallCardProps) => {
	const {name, position, profileImg, companyLogo, companyName, range} = props

	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<span className={styles.range}>{range}/10</span>
				<div className={styles.profile}>
					<img src={profileImg} alt={name} />
				</div>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.position}>{position}</h4>
        <div className={styles.company}>
          <img src={companyLogo} alt={companyName} />
        </div>
			</div>
		</div>
	);
};

export default MentorSmallCard;
