import React from 'react';
// Components
import Container from "components/container/container.component";
import Icon from 'components/icon/icon.component'
import Typography from 'components/typography/typography.component'
import Button from 'components/button/button.component'
// Assets
import logo from 'assets/images/logo.png';
// Styles
import './header.styles.sass'

const Header = () => {
	const handleClick = (e) =>{
		e.preventDefault();
		const anchor = e.target.getAttribute('href')
		const section = document.querySelector(anchor);
		window.scrollTo({
			top: section.offsetTop,
			behavior: "smooth"
		});
	}

	return (
		<div className="header">
			<Container className="header-container">
				<div className="header-wrapper">
					<a href="https://creativemarket.com/ThemesCode">
						<Icon className="header-logo mb-5" src={logo}/>
					</a>
					<Typography component="p" className="mb-2">EMAIL TEMPLATES FOR YOUR BUSINESS</Typography>
					<Typography component="h1" className="mb-5">BUN&shy;DLES</Typography>
					<Button href="#gallery" onClick={(e)=>handleClick(e)}>View</Button>
				</div>
			</Container>
		</div>
	);
};

export default Header;