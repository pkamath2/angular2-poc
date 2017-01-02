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
var http_1 = require('@angular/http');
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (term) {
        var searchUrl = "/app/data/search.json?term=" + term;
        // return this.http.get(searchUrl)
        // 			.toPromise()
        // 			.then((response) => {return response.json() as Search})
        // 			.catch(this.handleError);
        return this.http.get(searchUrl).map(function (r) { return r.json(); });
    };
    SearchService.prototype.handleError = function (error) {
        console.log(error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SearchService.prototype.searchNormal = function (term) {
        var searchUrl = "/app/data/search.json?term=" + term;
        return this.http.get(searchUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        //return this.http.get(searchUrl).map((r:response) => r.json())
    };
    SearchService.prototype.searchBasic = function (term) {
        var searchUrl = "/app/data/search-basic.json?term=" + term;
        // return this.http.get(searchUrl)
        // 			.toPromise()
        // 			.then((response) => {return response.json() as Search})
        // 			.catch(this.handleError);
        return this.http.get(searchUrl).map(function (r) { return r.json(); });
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map