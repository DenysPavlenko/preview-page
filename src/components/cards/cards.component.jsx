import React from 'react';
import classNames from "classnames";
// Styles
import './cards.styles.sass'

const Cards = React.forwardRef(({children, className, ...otherProps}, ref) => {
	const classes = classNames({
		'cards': true,
		[className]: className
	});

	return (
		<div className={classes} {...otherProps} ref={ref}>
			{children}
		</div>
	);
});

export default Cards;