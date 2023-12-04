import React, {useMemo} from 'react';
// Types
import {Tag} from '@customTypes/tags';
import {Common} from '@customTypes/main';

interface ContainerProps extends Common {
	as: Tag;
	fluid?: boolean;
}

const Container = (props: ContainerProps) => {
	const {as = Tag.Div, fluid, classes, children, id} = props;

	const ElementTag = useMemo(() => as, [as]);

	return (
		<ElementTag className={classes} id={id}>
			<div className='container' data-type={fluid ? 'fluid' : 'default'}>
				{children}
			</div>
		</ElementTag>
	);
};

export default Container;
