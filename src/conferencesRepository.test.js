import { findAll } from './conferencesRepository';

describe('conferencesRepository', () => {
	it('returns a list of conferences', () => {
		const conferences = [
			{
				name: "Code1",
				displayStartDate: "19 Jul 2018",
				displayEndDate: "10 Jul 2018",
				city: "Melbourne",
				website: "www.code1.com.au"
			}, 
			{
				name: "Code2",
				displayStartDate: "1 Nov 2018",
				displayEndDate: "5 Nov 2018",
				city: "Melbourne",
				website: "www.code2.com.au"
			}
		];

		const request = (url) => {
			return Promise.resolve({
				json: () => {
					return conferences;
				}
			})
		};

		findAll(request)
			.then(result => expect(result).toEqual({data: conferences}));

	});
});