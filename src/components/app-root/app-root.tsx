import { Component, h } from '@stencil/core';
import { routes } from '@/router';

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.scss'
})
export class AppRoot {
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
