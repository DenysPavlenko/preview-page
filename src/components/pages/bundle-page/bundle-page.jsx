import React from 'react';
import LazyLoad from 'react-lazyload'
import { withRouter, Redirect } from 'react-router-dom';

// Context
import withBundlesService from 'components/hoc/with-bundles-service'
// Components
import withLoader from 'components/hoc/with-loader';
import HeaderInner from 'components/header-inner/header-inner.component';
import Section from "components/section/section.component";
import Container from "components/container/container.component";
import Typography from "components/typography/typography.component";
import Cards from "components/cards/cards.component";
import Card from "components/card/card.component";
import Button from "components/button/button.component";
// styles
import './bundle-page.styles.sass'

class BundlePage extends React.Component {
	state = {
		bundle: null,
		hasError: false,
		height: 0
	}
	componentDidMount() {
		const {bundlesService, bundleName} = this.props;
		bundlesService.getBundle(bundleName)
			.then(bundle => {
				this.setState({bundle})
			})
			.catch(()=>{
				this.setState({hasError: true})
			})
	}

	render(){
		const {bundle, hasError} = this.state
		const content = !bundle ? null: <Content bundle={bundle}/>

		if(hasError) {
			return <Redirect to="/" />
		}

		return (
			<>
				<HeaderInner/>
				<Section className="bundle-page">
					<Container>
						{content}
					</Container>
				</Section>
			</>
		);
	};
};

const Content = ({bundle}) => (
	<>
		<Typography component="h2" className="bundle-page-title">{bundle.title}</Typography>
		<Cards>
			{bundle.templates.map(({name, link, image}, idx) => (
				<Card key={idx}>
					<LazyLoad key={idx} offset={-50} height={260} once>
						<Card.Preview href={link} src={require(`assets/images/${image}`)} scrollable></Card.Preview>
					</LazyLoad>
					<Card.Label href={link}>{name}</Card.Label>
				</Card>
			))}
		</Cards>
		<div className="bundle-page-button">
			<Button href={bundle.link} btnAlt>Visit page</Button>
		</div>
	</>
)

export default withLoader(withRouter(withBundlesService(BundlePage)))
