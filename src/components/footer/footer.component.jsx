import React from 'react';
// Components
import Section from "components/section/section.component";
import Container from "components/container/container.component";
import Typography from "components/typography/typography.component";
// Assets
import logo from 'assets/images/logo.png';
// Styles
import './footer.styles.sass'

const Footer = () => {
	return (
		<footer className="footer">
			<Section>
				<Container>
					<div className="footer-row">
						<Typography component="h4" className="mb-0 footer-copy">THEMESCODE {new Date().getFullYear()} <br/>EMAIL TEMPLATES FOR YOUR BUSINESS</Typography>
						<a href="https://creativemarket.com/ThemesCode" className="footer-portfolio">
							<img src={logo} alt="logo"/>
							<span>Portfolio</span>
						</a>
					</div>
				</Container>
			</Section>
		</footer>
	);
};

export default Footer;