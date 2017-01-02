import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CreateRuleComponent} from '../create-rule/createrule.component';
import {DocumentService} from '../documents/document.service';
import {UserComponent} from '../users/user.component';
import {UserService} from '../users/user.service';
import {SearchComponent} from '../search/search.component';
import {SearchService} from '../search/search.service';
import {SectionsComponent} from '../section-visibility/sections-component';

const routes:Routes = [
	{path:'', redirectTo:'/create-rules', pathMatch:'full'}
	{path:'create-rules', component:CreateRuleComponent},
	{path:'view-rules', component:UserComponent}
];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]

})
export class BaseRouterModule{}