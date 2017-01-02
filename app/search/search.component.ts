import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import '/app/rxjs-extensions';

import {SearchService} from './search.service';
import {Search} from './search';

@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: '/app/search/search-user-criteria.html',
	providers: [SearchService]
})
export class SearchComponent implements OnInit{

	searchResult:Observable<Search>;
	searchResult_users:Observable<Search.SearchUser> = Observable.of<Search.SearchUser>;
	private searchTerms = new Subject<string>();

	constructor(private searchService: SearchService){}

	search(term: string): void{
		//this.searchService.searchNormal(term).then((response) => {this.searchResult = response})
		this.searchTerms.next(term); 
	}

	ngOnInit(): void{
		console.log("Initing")
		this.searchResult = this.searchTerms
							.debounceTime(300)
							.distinctUntilChanged()
							.switchMap(term => {
													this.searchResult = Observable.of<Search>;
													if(term){
														this.searchResult = this.searchService.search(term);
														this.searchResult_users = this.searchResult.user;
														console.log("+++++++"+this.searchResult_users )
													}
													return this.searchResult;
													//return term?this.searchService.search(term):Observable.of<Search>
												})
							.catch(error => {console.log(error); return Observable.of<Search>  })
	//	this.searchResult.subscribe();
console.log(this.searchResult_users)
		if(this.searchResult) this.searchResult_users = this.searchResult.user;
	if(this.searchResult_users) 	this.searchResult_users.subscribe();
	}

	

} 