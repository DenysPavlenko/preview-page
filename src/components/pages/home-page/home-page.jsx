import React from 'react';
// Components
import withLoader from 'components/hoc/with-loader';
import Header from 'components/header/header.component';
import Gallery from "components/gallery/gallery.component";

const HomePage = () => {
	return (
		<>
			<Header/>
			<Gallery/>
		</>
	);
};

export default withLoader(HomePage);