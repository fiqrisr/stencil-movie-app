import { Component, h, Prop } from '@stencil/core';
import { NavItem } from '@/interfaces';

@Component({
	tag: 'app-nav',
	styleUrl: 'app-nav.scss'
})
export class AppNav {
	@Prop() items: NavItem[];
	render() {
		return (
			<div class="app-nav">
				<ul>
					{this.items.map(item => {
						return (
							<li>
								<a href={item.to}>{item.label}</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
