import { CONFERENCES_ENDPOINT } from './config';

// write tests
export const findAll = () => {
	return fetch(CONFERENCES_ENDPOINT)
		.then(response => response.json())
		.then(body => ({data: body}))
		.catch(error => ({data: []}));
};
