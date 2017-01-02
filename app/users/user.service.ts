import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {User} from './user';

@Injectable()
export class UserService{

	constructor(private http:Http){}

	getUsers(): Promise<User[]>{
		const userUrl = "/app/data/users.json";
		return this.http.get(userUrl)
				 .toPromise()
				 .then((response) => { return response.json() as User[]})
				 .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.log( error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}


  	
}
