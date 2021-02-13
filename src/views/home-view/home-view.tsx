import { Component, h } from '@stencil/core';

@Component({
	tag: 'home-view',
	styleUrl: './home-view.scss'
})
export class HomeView {
	render() {
		return (
			<div class="home-view">
				<h1>Home View</h1>
			</div>
		);
	}
}
