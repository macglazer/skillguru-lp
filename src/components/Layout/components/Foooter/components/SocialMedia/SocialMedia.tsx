// Libraries
import React from 'react';
// Icons
import {Facebook} from '@icons/_index';
import {Linkedin} from "@icons/_index";
// Styles
import * as styles from './SocialMedia.module.scss';

const SocialMedia = () => {
    const socialList = [
        {
            id: 'fb01',
            icon: <Facebook/>,
            label: 'Facebook',
            href: 'https://www.facebook.com',
        },
        {
            id: 'link01',
            icon: <Linkedin/>,
            label: 'Linkedin',
            href: 'https://www.linkedin.com/',
        },
    ];

    return (
        <div className={styles.wrapper}>
            {socialList.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={item.label}>
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;
