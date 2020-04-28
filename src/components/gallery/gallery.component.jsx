import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LazyLoad, { forceCheck } from 'react-lazyload'
// Context
import withBundlesService from 'components/hoc/with-bundles-service'
// Components
import Section from "components/section/section.component";
import Container from "components/container/container.component";
import Cards from "components/cards/cards.component";
import Card from "components/card/card.component";
// Functions
import { galleryFilter } from "./functions";
// Styles
import './gallery.styles.sass'

class Gallery extends React.Component {
	bundlesPreview = React.createRef();

	state = {
		links: [],
		bundles: [],
	}

	componentDidMount() {
		const { bundlesService } = this.props;
		// Get bundles
		bundlesService.getAllBundles()
			.then(bundles => this.setState({ bundles }));
		// Get links
		bundlesService.getLinks()
			.then(links => this.setState({ links }));
	}

	handleClick = (e) => {
		galleryFilter(e, this.bundlesPreview, forceCheck);
	}

	render() {
		const { bundles, links } = this.state;

		return (
			<Section className="gallery" id="gallery">
				<Container>
					<ul className="gallery-filter" onClick={(e) => this.handleClick(e)} >
						<li className="h3 gallery-filter-item active" data-rel="all">All</li>
						{links.map(({ name, category }, idx) => (
							<li className="h3 gallery-filter-item" data-rel={category} key={idx}>{name}</li>
						))}
					</ul>
					<Cards className="gallery-cards" ref={this.bundlesPreview}>
						{bundles.map(({ link, name, category, preview }) => (
							<Card className={`gallery-cards-card all ${category}`} key={name}>
								<LazyLoad height={255}>
									<Card.Preview href={link} src={require(`assets/images/${preview}`)} overlayText="View in market"></Card.Preview>
								</LazyLoad>
								<Link to={`/bundle/${name}`}>
									<Card.Label>
										Details
									</Card.Label>
								</Link>
							</Card>
						))}
					</Cards>
				</Container>
			</Section>
		);
	}
};

export default withRouter(withBundlesService(Gallery))
