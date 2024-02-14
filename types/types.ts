export type TypeLink = {
	id: number;
	name: string;
	href: string;
}[];

export type CardPrice = {
	id: number;
	title: string;
	price: string;
	color: string;
	optimal: string;
	plus: string;
	list: string[];
	start: string;
}[];

export type FormData = {
	surname: string;
	name: string;
	company: string;
	email: string;
	phone: string;
	message: string;
};

export type MapInput = {
	id: number;
	name: 'company' | 'email' | 'name' | 'surname' | 'message';
	placeholder: string;
	type: string;
};
