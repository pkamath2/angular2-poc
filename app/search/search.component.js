"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
require('/app/rxjs-extensions');
var search_service_1 = require('./search.service');
var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.searchResult_users = Observable_1.Observable.of();
        this.searchTerms = new Subject_1.Subject();
    }
    SearchComponent.prototype.search = function (term) {
        //this.searchService.searchNormal(term).then((response) => {this.searchResult = response})
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Initing");
        this.searchResult = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) {
            _this.searchResult = Observable_1.Observable.of();
            if (term) {
                _this.searchResult = _this.searchService.search(term);
                _this.searchResult_users = _this.searchResult.user;
                console.log("+++++++" + _this.searchResult_users);
            }
            return _this.searchResult;
            //return term?this.searchService.search(term):Observable.of<Search>
        })
            .catch(function (error) { console.log(error); return Observable_1.Observable.of(); });
        //	this.searchResult.subscribe();
        console.log(this.searchResult_users);
        if (this.searchResult)
            this.searchResult_users = this.searchResult.user;
        if (this.searchResult_users)
            this.searchResult_users.subscribe();
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: '/app/search/search-user-criteria.html',
            providers: [search_service_1.SearchService]
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map