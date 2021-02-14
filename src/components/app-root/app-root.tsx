import { Component, h } from '@stencil/core';
import { routes } from '@/router';

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.scss',
	shadow: true
})
export class AppRoot {
	render() {
		return (
			<div>
				<header>
					<nav>
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
									to: '/tv-shows'
								}
							]}
						></app-nav>
					</nav>
				</header>

				<main>
					<app-router routes={routes}></app-router>
				</main>
			</div>
		);
	}
}
