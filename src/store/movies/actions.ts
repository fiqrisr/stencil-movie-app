import { action } from 'typesafe-actions';
import { Constants } from './types';

export const getPopularMovies = () => {
	const movies = [{ name: 'Test' }, { name: 'Test 2' }];

	return action(Constants.ADD_POPULAR, { results: movies });
};
