import createDataContext from './createDataContext';

const headerFooterReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_HEADER_FOOTER_SUCCESS':
			return {
				...state,
				headerFooterContent: { ...action.payload },
			};

		default:
			return state;
	}
};

const fetchHeaderFooterData = (dispatch) => {
	return ({ headerFooterContent }) => {
		dispatch({
			type: 'FETCH_HEADER_FOOTER_SUCCESS',
			payload: headerFooterContent,
		});
	};
};

export const { Context, Provider } = createDataContext(
	headerFooterReducer,
	{
		fetchHeaderFooterData,
	},
	{
		headerFooterContent: null,
	}
);
