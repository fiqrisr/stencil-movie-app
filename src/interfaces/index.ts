export interface NavItem {
	label: string;
	to: string;
}

export interface Route {
	url: string;
	component: string;
	exact?: boolean;
}
