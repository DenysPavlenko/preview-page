import React from 'react';
// Styles
import './spinner.styles.sass'

const Spinner = () => {
	return (
		<div className="spinner">
			<div className="spinner-wrapper">
				<div className="spinner-content"></div>
			</div>
		</div>
	);
};

export default Spinner;