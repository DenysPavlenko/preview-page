import React from 'react';
import classNames from 'classnames'
import './typography.styles.sass';

const Typography = ({ children, component, variant, className}) => {

	const classes = classNames({
		[variant]: variant,
		[className]: className
	})

	const Tag = component ? component : 'p'
	return (
		<Tag className={classes || null}>{children}</Tag>
	);

};

export default Typography;