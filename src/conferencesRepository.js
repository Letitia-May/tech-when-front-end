export const findAll = () => {
	return fetch('REPLACE_WITH_URL')
		.then(response => response.json())
		.then(body => ({data: body}))
		.catch(error => ({data: []}));
};
