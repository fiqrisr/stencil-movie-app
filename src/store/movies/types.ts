import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

interface Movies {
	name: string;
}

export interface MoviesState {
	popular: Movies[];
}

export enum Constants {
	ADD_POPULAR = 'ADD_POPULAR'
}

export type MoviesActions = ActionType<typeof actions>;
