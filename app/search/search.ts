export class Search{

	authors: SearchUser;
	company: SearchCompany;


}

export class SearchUser{

	id: string;
	full_name:string;
}

export class SearchCompany{

	id: string;
	company_name: string;
}

// {
// 	"authors":[
// 		{
// 			"id":"pkamath2",
// 			"full_name":"Purnima Kamath"
// 		},
// 		{
// 			"id":"skadam",
// 			"full_name":"Sunil Kadam"
// 		},
// 		{
// 			"id":"jdriscoll",
// 			"full_name":"Jim Driscoll"
// 		}
// 	],
// 	"Company":[
// 		{
// 			"id":"123",
// 			"company_name":"Alibaba"
// 		},
// 		{
// 			"id":"234",
// 			"company_name":"Fidelity"
// 		},
// 		{
// 			"id":"456",
// 			"company_name":"Credit Suisse"
// 		},
// 		{
// 			"id":"3455",
// 			"company_name":"BlackRock"
// 		}

// 	]
// }