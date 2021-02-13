import { Component, h } from '@stencil/core';

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
					<stencil-router>
						<stencil-route-switch scrollTopOffset={0}>
							<stencil-route url="/" component="home-view" exact={true} />
							<stencil-route url="/movies" component="movies-view" exact={true} />
							<stencil-route url="/tv-shows" component="tvshows-view" exact={true} />
						</stencil-route-switch>
					</stencil-router>
				</main>
			</div>
		);
	}
}
