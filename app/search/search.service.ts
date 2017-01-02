import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

//import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

import {Search, SearchUser, SearchCompany, SearchBasic} from './search'

@Injectable()
export class SearchService{

	constructor(private http:Http){}

	search(term: string):Observable<Search>{

		const searchUrl = "/app/data/search.json?term="+term;
		// return this.http.get(searchUrl)
		// 			.toPromise()
		// 			.then((response) => {return response.json() as Search})
		// 			.catch(this.handleError);
		return this.http.get(searchUrl).map((r:response) => r.json())

	}

	private handleError(error: any): Promise<any> {
    	console.log( error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}

  	searchNormal(term: string):Search{

		const searchUrl = "/app/data/search.json?term="+term;
		return this.http.get(searchUrl)
					.toPromise()
					.then((response) => {return response.json() as Search})
					.catch(this.handleError);
		//return this.http.get(searchUrl).map((r:response) => r.json())

	}

	searchBasic(term: string):Observable<SearchBasic>{

		const searchUrl = "/app/data/search-basic.json?term="+term;
		// return this.http.get(searchUrl)
		// 			.toPromise()
		// 			.then((response) => {return response.json() as Search})
		// 			.catch(this.handleError);
		return this.http.get(searchUrl).map((r:response) => r.json())



}