import React from 'react';
import { BundlesConsumer } from 'components/bundles-context';

export default (Wrapped) => {
	return (props) => {
		return (
			<BundlesConsumer>
				{(bundlesService)=>{
					return (
						<Wrapped
							{...props}
							bundlesService={bundlesService}
						/>
					)
				}}
			</BundlesConsumer>
		)
	}
}