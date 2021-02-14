import { Component, h } from '@stencil/core';

@Component({
	tag: 'app-header',
	styleUrl: 'app-header.scss'
})
export class AppHeader {
	render() {
		return (
			<div class="app-header">
				<div class="container">
					<slot name="left" />
					<slot name="middle" />
					<slot name="right" />
				</div>
			</div>
		);
	}
}
