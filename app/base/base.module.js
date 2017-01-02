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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var document_component_1 = require('../documents/document.component');
var document_service_1 = require('../documents/document.service');
var user_component_1 = require('../users/user.component');
var user_service_1 = require('../users/user.service');
var search_component_1 = require('../search/search.component');
var search_service_1 = require('../search/search.service');
var sections_component_1 = require('../section-visibility/sections-component');
var createrule_component_1 = require('../create-rule/createrule.component');
var base_component_1 = require('./base.component');
var base_routermodule_1 = require('./base.routermodule');
var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        core_1.NgModule({
            // bootstrap:[CreateRuleComponent,UserComponent],
            bootstrap: [base_component_1.BaseComponent],
            declarations: [document_component_1.DocumentComponent, user_component_1.UserComponent, search_component_1.SearchComponent, sections_component_1.SectionsComponent, createrule_component_1.CreateRuleComponent, base_component_1.BaseComponent],
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, base_routermodule_1.BaseRouterModule],
            providers: [document_service_1.DocumentService, user_service_1.UserService, search_service_1.SearchService]
        }), 
        __metadata('design:paramtypes', [])
    ], BaseModule);
    return BaseModule;
}());
exports.BaseModule = BaseModule;
//# sourceMappingURL=base.module.js.map