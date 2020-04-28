import React from 'react';
import classNames from "classnames";
// Components
import CardPreview from './card-preview/card-preview.component'
import CardLabel from './card-label/card-label.component'
// Styles
import "./card.styles.sass";

class Card extends React.Component {
	static Preview = CardPreview;
	static Label = CardLabel;

	render(){
		const { className, children } = this.props;

		const classes = classNames({
			'card': true,
			[className]: className
		});

		return (
			<div className={classes}>
				{React.Children.map(children, child => (
					React.cloneElement(child, { })
				))}
			</div>
		);
	}
};

export default Card;