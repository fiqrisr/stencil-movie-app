import { combineReducers, createStore } from 'redux';
import { moviesReducer } from './movies/reducer';
import { MoviesState } from './movies/types';

export interface RootState {
	movies: MoviesState;
}

const store = createStore<RootState, any, any, any>(
	combineReducers({
		movies: moviesReducer
	}),
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
