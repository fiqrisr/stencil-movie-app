import { Component, h } from '@stencil/core';

@Component({
	tag: 'app-search',
	styleUrl: 'app-search.scss'
})
export class AppSearch {
	render() {
		return <input type="text" class="app-search" placeholder="Search any movies or tv shows" />;
	}
}
