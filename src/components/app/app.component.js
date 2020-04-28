import React from 'react';
import { HashRouter  as Router, Route, Switch, Redirect } from 'react-router-dom';
// Components
import ScrollToTop from "components/scroll-to-top/scroll-to-top.component";
import Footer from "components/footer/footer.component";
// Provider
import { BundlesProvider } from 'components/bundles-context';
// Pages
import HomePage from 'components/pages/home-page/home-page';
import BundlePage from 'components/pages/bundle-page/bundle-page';
// Service
import BundlesService from 'services/bundles-service'


class App extends React.Component {
	state = {
		bundles: new BundlesService(),
	}

	componentDidMount(){
		window.addEventListener('load', ()=>{
			let preloader = document.getElementById('preloader')
			preloader.style.display = 'none'
		});
	}

	render(){
		return (
			<div className="app">
				<BundlesProvider value={this.state.bundles}>
					<Router>
						<ScrollToTop>
							<Switch>
								<Route path="/" exact component={HomePage} />
								<Route path="/bundle/:id" exact render={({match}) => {
									const {id} = match.params;
									return <BundlePage bundleName={id}/>
								}} />
								<Redirect to="/" />
							</Switch>
							<Footer/>
						</ScrollToTop>
					</Router>
				</BundlesProvider>
			</div>
		);
	}
};

export default App;