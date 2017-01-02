import {Injectable} from '@angular/core'; 
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Document} from './document';

@Injectable()
export class DocumentService{

	constructor(private http:Http){}

	getDocuments(): Promise<Document[]>{
		const documentDataUrl = "/app/data/documents.json";
		return this.http.get(documentDataUrl)
						.toPromise()
						.then((response) => {return response.json() as Document[]})
						.catch(this.handleError);

	}

	private handleError(error: any): Promise<any> {
    	console.log( error); // for demo purposes only
    	return Promise.reject(error.message || error);
  	}
}