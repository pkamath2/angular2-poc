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
var router_1 = require('@angular/router');
var createrule_component_1 = require('../create-rule/createrule.component');
var user_component_1 = require('../users/user.component');
var routes = [
    { path: '', redirectTo: '/create-rules', pathMatch: 'full' },
    { path: 'create-rules', component: createrule_component_1.CreateRuleComponent },
    { path: 'view-rules', component: user_component_1.UserComponent }
];
var BaseRouterModule = (function () {
    function BaseRouterModule() {
    }
    BaseRouterModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], BaseRouterModule);
    return BaseRouterModule;
}());
exports.BaseRouterModule = BaseRouterModule;
//# sourceMappingURL=base.routermodule.js.map