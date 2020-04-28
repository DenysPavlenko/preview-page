import React from 'react';
import classNames from "classnames";
import "./image.styles.sass";


const Image = ({ src, className, alt, ...atrs}) => {

	const classes = classNames({
		'image': true,
		[className]: className
	})

	return (
		<img src={src} className={classes} alt={alt}  {...atrs} />
	);
};

export default Image;