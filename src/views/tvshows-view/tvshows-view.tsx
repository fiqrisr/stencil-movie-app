import { Component, h } from '@stencil/core';

@Component({
	tag: 'tvshows-view',
	styleUrl: './tvshows-view.scss'
})
export class TVShowsView {
	render() {
		return (
			<div class="tvshows-view">
				<h1>TV Shows View</h1>
			</div>
		);
	}
}
