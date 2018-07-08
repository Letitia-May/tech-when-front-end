export const findAll = () => {
	return Promise.resolve({
		data: [
			{
				"name": "Code1",
				"displayStartDate": "19 Jul 2018",
				"displayEndDate": "10 Jul 2018",
				"city": "Melbourne",
				"website": "www.code1.com.au"
			},
			{
				"name": "Code2",
				"displayStartDate": "9 Oct 2018",
				"displayEndDate": "9 Oct 2018",
				"city": "Melbourne",
				"website": "www.code2.com.au"
			},
			{
				"name": "Code3",
				"displayStartDate": "1 Nov 2018",
				"displayEndDate": "3 Nov 2018",
				"city": "Melbourne",
				"website": "www.code3.com.au"
			}
		]
	});
};
