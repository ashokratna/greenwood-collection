import queryString from 'query-string';

const API_CONFIG = {
	baseUrl: `${process.env.REACT_APP_BASE_URL}`,
	path: {
		home: 'wp/v2/pages/2',
		header: 'menus/v1/menus/2',
		headerFooterAssets: 'acf/v3/options/options',
		career: 'wp/v2/pages/139',
		contact: 'wp/v2/pages/175',
		industries: 'wp/v2/pages/225',
		legal: 'wp/v2/pages/266',
		faq: 'wp/v2/pages/280',
		products: 'wp/v2/pages/308',
		pricing: 'wp/v2/pages/336',
		documentation: 'wp/v2/pages/367',
		onboarding: 'wp/v2/pages/374',
		api: 'wp/v2/pages/446',
		apiContent: 'wp/v2/website_api/',
		search: 'wp/v2/search',
	},
};

const getUrl = (url, params) => {
	let urlString = `${API_CONFIG.baseUrl}/${url}`;
	if (params) {
		urlString += `?${queryString.stringify(params)}`;
	}
	return urlString;
};

export { API_CONFIG, getUrl };
