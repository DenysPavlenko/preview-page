import React from 'react';
import classNames from "classnames";
// Components
import Spinner from 'components/spinner/spinner.component'
// Styles
import './card-preview.styles.sass'

class CardPreview extends React.Component {

	state = {
		isLoading: true,
		transitionTime: null
	}

	componentDidMount() {
		const { src, scrollable } = this.props;
		const image = new Image();
		image.src = src;
		image.addEventListener('load', () => {
			this.setState({
				isLoading: false,
				transitionTime: scrollable ? Math.floor(image.naturalHeight / 750) : null
			});
		});
	}


	render(){
		const {href, src, scrollable, overlayText} = this.props;
		const {isLoading, transitionTime} = this.state;

		const classes = classNames({
			'card-preview': true,
			'card-preview-scrollable': scrollable,
		});

		const styles = {
			backgroundImage:`url(${src})`,
			transition: scrollable && `background-position ${transitionTime}s linear`
		};

		const cardPreviewImage = (
			<figure
				className="card-preview-image"
				style={styles}
				onMouseOver={ scrollable ? (e) => e.target.style.backgroundPositionY = '100%' : null }
				onMouseOut={ scrollable ? (e) => e.target.style.backgroundPositionY = '0' : null }
			></figure>
		);

		const cardPreviewOverlay = (
			<div className="card-preview-overlay">
				<span className="h4">{overlayText}</span>
			</div>
		);

		return (
			<a href={href} className={classes}>
				{ isLoading ? <Spinner/> : cardPreviewImage }
				{ scrollable || cardPreviewOverlay }
			</a>
		);
	}
};

export default CardPreview;