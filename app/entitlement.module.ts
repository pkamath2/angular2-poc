import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {DocumentComponent} from './documents/document.component';
import {DocumentService} from './documents/document.service';
import {UserComponent} from './users/user.component';
import {UserService} from './users/user.service';
import {SearchComponent} from './search/search.component';
import {SearchService} from './search/search.service';
import {SectionsComponent} from './section-visibility/sections-component'

@NgModule({
	bootstrap:[DocumentComponent,UserComponent,SearchComponent,SectionsComponent],
	declarations:[DocumentComponent,UserComponent,SearchComponent,SectionsComponent],
	imports:[BrowserModule, HttpModule],
	providers:[DocumentService,UserService,SearchService]
})
export class EntitlementModule{} 