import createDataContext from './createDataContext';

const headerReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_HEADER_SUCCESS':
			return {
				...state,
				headerContent: [...action.payload],
			};

		default:
			return state;
	}
};

const fetchHeaderData = (dispatch) => {
	return ({ headerContent }) => {
		dispatch({ type: 'FETCH_HEADER_SUCCESS', payload: headerContent });
	};
};

export const { Context, Provider } = createDataContext(
	headerReducer,
	{
		fetchHeaderData,
	},
	{
		headerContent: [
			{
				title: 'Company',
				subNav: [
					{
						name: 'About',
						path: '',
					},
					{
						name: 'Career',
						path: '',
					},
					{
						name: 'Industries',
						path: '',
					},
					{
						name: 'Contact Us',
						path: '',
					},
					{
						name: 'FQA',
						path: '',
					},
				],
			},
			{
				title: 'Products',
				subNav: [
					{
						name: 'About',
						path: '',
					},
					{
						name: 'Career',
						path: '',
					},
					{
						name: 'Industries',
						path: '',
					},
					{
						name: 'Contact Us',
						path: '',
					},
					{
						name: 'FQA',
						path: '',
					},
				],
			},
			{
				title: 'Pricing',
				subNav: [
					{
						name: 'About',
						path: '',
					},
					{
						name: 'Career',
						path: '',
					},
					{
						name: 'Industries',
						path: '',
					},
					{
						name: 'Contact Us',
						path: '',
					},
					{
						name: 'FQA',
						path: '',
					},
				],
			},
		],
	}
);
