import {Component} from '@angular/core';

import {DocumentComponent} from '../documents/document.component';
import {DocumentService} from '../documents/document.service';
import {UserComponent} from '../users/user.component';
import {UserService} from '../users/user.service';
import {SearchComponent} from '../search/search.component';
import {SearchService} from '../search/search.service';
import {SectionsComponent} from '../section-visibility/sections-component';
import {CreateRuleComponent} from '../create-rule/createrule.component';

@Component({
	selector:'create-rule',
	templateUrl:'/app/create-rule/createrule.html'
})
export class CreateRuleComponent{}