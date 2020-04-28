import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Container from "components/container/container.component";
import Icon from 'components/icon/icon.component'
// Assets
import logo from 'assets/images/logo.png';
// Styles
import './header-inner.styles.sass'

const HeaderInner = () => {
	return (
		<div className="header-inner">
			<Container>
				<Link to="/">
					<Icon src={logo} className="header-inner-logo" alt="logo"/>
				</Link>
			</Container>
		</div>
	);
};

export default HeaderInner;