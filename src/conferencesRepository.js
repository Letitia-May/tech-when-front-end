import { CONFERENCES_ENDPOINT } from './config';
import { request } from './request';

export const findAll = () => {
	return request(CONFERENCES_ENDPOINT)
		.then(response => response.json())
		.then(body => ({data: body}))
		.catch(error => ({data: []}));
};
