import { Component, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { routes } from '@/router';
import { rootStore } from '@/store';
import appStore from '@/store';

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.scss'
})
export class AppRoot {
	componentWillLoad() {
		store.setStore(rootStore);
		console.log(appStore.getStore());
	}

	render() {
		return (
			<div>
				<header>
					<app-header>
						<div slot="left" class="brand">
							Moviio
						</div>
						<nav slot="middle">
							<app-nav
								items={[
									{
										label: 'Home',
										to: '/'
									},
									{
										label: 'Movies',
										to: '/movies'
									},
									{
										label: 'TV Shows',
										to: '/tv'
									}
								]}
							></app-nav>
						</nav>
						<app-search slot="right" />
					</app-header>
				</header>

				<main>
					<app-router routes={routes}></app-router>
				</main>
			</div>
		);
	}
}
