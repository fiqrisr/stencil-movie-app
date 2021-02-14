import { Component, h, State } from '@stencil/core';
import axios from '@/api';

@Component({
	tag: 'home-view',
	styleUrl: './home-view.scss'
})
export class HomeView {
	@State() popular = [];

	componentWillLoad(): void | Promise<void> {
		axios.get('/movie/popular').then(response => (this.popular = response.data.results));
	}

	render() {
		return (
			<div class="home-view">
				<h1>Home View</h1>

				<ul>
					{this.popular.map(movie => (
						<li>{movie.title}</li>
					))}
				</ul>
			</div>
		);
	}
}
