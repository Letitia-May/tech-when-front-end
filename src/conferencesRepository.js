import { CONFERENCES_ENDPOINT } from './config';

export const findAll = (request) => {
	return request(CONFERENCES_ENDPOINT)
		.then(response => response.json())
		.then(body => ({data: body}))
		.catch(error => ({data: []}));
};
