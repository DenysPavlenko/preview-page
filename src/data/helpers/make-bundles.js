import bundles from '../bundles/index';

export default ({ type, quant, links }) => {
	let start = 0;
	return links.map((link, idx) => {
		const templates = [];
		const includedBundles = Object.values(bundles).splice(start, quant);
		start += quant;
		includedBundles.forEach(bundle => templates.push(...bundle));

		return {
			category: `${type}-templates`,
			name: `${type}-templates-${idx + 1}`,
			title: `${type} Email templates bundle. Version ${idx + 1}`,
			preview: `bundle-previews/bundle-${type}.${idx + 1}.jpg`,
			link,
			templates
		}
	})
}