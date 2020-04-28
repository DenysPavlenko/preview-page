import data from 'data'

export default class BundlesService {
	// Get all bundles
	getAllBundles = async () => {
		return data.map(item => ({
			category: item.category,
			name: item.name,
			preview: item.preview,
			link: item.link
		}));
	};

	// Get links
	getLinks = async () => {
		const links = [];
		data.forEach(bundle => {
			const valueExist = links.some(el => el.category === bundle.category)
			if(!valueExist){
				links.push({
					category:bundle.category,
					name:bundle.category.replace('-', ' '),
				});
			}
		});
		return links;
	};

	// Get bundle
	getBundle = async (bundleName) => {
		const bundle = data.find(el => el.name === bundleName);
		return {
			title: bundle.title,
			link: bundle.link,
			templates: bundle.templates
		};
	};
}