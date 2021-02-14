import { Component, h, Prop } from '@stencil/core';
import { Route } from '@/interfaces';

@Component({
	tag: 'app-router'
})
export class AppRouter {
	@Prop() routes: Route[];

	render() {
		return (
			<stencil-router titleSuffix=" - Moviio">
				<stencil-route-switch scrollTopOffset={0}>
					{this.routes.map(route => (
						<stencil-route url={route.url} component={route.component} exact={route.exact} />
					))}
				</stencil-route-switch>
			</stencil-router>
		);
	}
}
