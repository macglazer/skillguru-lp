import React from 'react';
import classNames from 'classnames';
// Types
import {Common} from '@customTypes/main';
// Styles
import styles from './Text.module.scss';

interface TextProps extends Common {
	as?: 'p' | 'span';
}

const Text = ({children, classes, as: Tag = 'p'}: TextProps) => (
	<Tag className={classNames(styles.text, classes)}>{children}</Tag>
);

export default Text;
