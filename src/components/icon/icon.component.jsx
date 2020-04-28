import React from 'react';
import classNames from "classnames";
import "./icon.styles.sass";


const Icon = ({ src, className, alt, ...atrs }) => {

	const classes = classNames({
		'icon': true,
		[className]: className
	})

	return (
		<img src={src} className={classes} alt={alt}  {...atrs} />
	);
};

export default Icon;