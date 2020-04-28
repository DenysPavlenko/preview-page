import React, { Component } from 'react';

const withLoader =  (View) => {
	return class extends Component {
		render() {
			return <View {...this.props}/>
		}
	}
}

export default withLoader;