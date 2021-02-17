import { Component, h } from '@stencil/core';
import { getPopularMovies } from '@/store/movies/actions';
import store from '@/store';

@Component({
	tag: 'home-view',
	styleUrl: './home-view.scss'
})
export class HomeView {
	componentWillLoad() {
		store.getStore().dispatch(getPopularMovies());
	}

	render() {
		return (
			<div class="home-view">
				<h1>Home View</h1>

				<ul>
					{store.getState().movies.popular.map(movie => (
						<li>{movie.name}</li>
					))}
				</ul>

				{/* <button onClick={() => this.getMovie()}>Get more</button> */}
			</div>
		);
	}
}
