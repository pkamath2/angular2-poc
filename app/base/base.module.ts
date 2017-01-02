import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {DocumentComponent} from '../documents/document.component';
import {DocumentService} from '../documents/document.service';
import {UserComponent} from '../users/user.component';
import {UserService} from '../users/user.service';
import {SearchComponent} from '../search/search.component';
import {SearchService} from '../search/search.service';
import {SectionsComponent} from '../section-visibility/sections-component';
import {CreateRuleComponent} from '../create-rule/createrule.component';
import {BaseComponent} from './base.component';

import {BaseRouterModule} from './base.routermodule';

@NgModule({
	// bootstrap:[CreateRuleComponent,UserComponent],
	bootstrap:[BaseComponent],
	declarations:[DocumentComponent,UserComponent,SearchComponent,SectionsComponent,CreateRuleComponent,BaseComponent],
	imports:[BrowserModule, HttpModule, BaseRouterModule],
	providers:[DocumentService,UserService,SearchService]
})
export class BaseModule{}