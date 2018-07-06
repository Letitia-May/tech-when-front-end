export const findAll = () => {
	return Promise.resolve({
		data: [{
			"name": "Code1",
			"displayStartDate": "19 Jul 2018",
			"displayEndDate": "10 Jul 2018",
			"city": "Melbourne",
			"website": "www.code1.com.au"
		}]
	});
};
