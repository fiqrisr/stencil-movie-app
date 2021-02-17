import { Component, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { getPopularMovies } from '@/store/movies/actions';

@Component({
	tag: 'home-view',
	styleUrl: './home-view.scss'
})
export class HomeView {
	componentWillLoad() {
		store.getStore().dispatch(getPopularMovies());
		console.log(store.getStore().getState());
	}

	render() {
		return (
			<div class="home-view">
				<h1>Home View</h1>

				<ul>
					{store
						.getStore()
						.getState()
						.movies.popular.map(movie => (
							<li>{movie.name}</li>
						))}
				</ul>

				{/* <button onClick={() => this.getMovie()}>Get more</button> */}
			</div>
		);
	}
}
