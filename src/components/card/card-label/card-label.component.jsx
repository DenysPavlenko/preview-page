import React from 'react';
import classNames from "classnames";
// Components
import Typography from "components/typography/typography.component";
// Styles
import "./card-label.styles.sass";

const CardLabel = ({ className, children, href, scrollable, ...outerProps}) => {
	const cardClasses = classNames({
		'card-label': true,
		[className]: className
	});

	const Tag = href ? 'a' : 'div';

	return (
		<Tag href={href} className={cardClasses} {...outerProps}>
			<Typography component="h4" className="card-label-title mb-0">{children}</Typography>
		</Tag>
	);
};


export default CardLabel;