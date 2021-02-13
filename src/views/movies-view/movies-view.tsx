import { Component, h } from '@stencil/core';

@Component({
	tag: 'movies-view',
	styleUrl: './movies-view.scss'
})
export class MoviesView {
	render() {
		return (
			<div class="movies-view">
				<h1>Movies View</h1>
			</div>
		);
	}
}
