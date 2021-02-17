import { Constants, MoviesState, MoviesActions } from './types';

const initialState: MoviesState = {
	popular: []
};

export const moviesReducer = (state: MoviesState = initialState, action: MoviesActions): MoviesState => {
	switch (action.type) {
		case Constants.ADD_POPULAR:
			return {
				popular: [...state.popular, ...action.payload.results]
			};
		default:
			return state;
	}
};
