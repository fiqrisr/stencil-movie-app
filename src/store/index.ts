import { store } from '@stencil/redux';
import { combineReducers, createStore } from 'redux';
import { moviesReducer } from './movies/reducer';
import { MoviesState } from './movies/types';

export interface RootState {
	movies: MoviesState;
}

export const rootStore = createStore<RootState, any, any, any>(
	combineReducers({
		movies: moviesReducer
	}),
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const appStore = {
	getStore: () => store.getStore(),
	getState: () => store.getState() as RootState
};

export default appStore;
