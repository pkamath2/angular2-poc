import {Component, OnInit} from '@angular/core';

import {UserService} from './user.service';
import {User} from './user';

@Component({
	selector:"users",
	templateUrl:"/app/users/users-list.html"
})
export class UserComponent implements OnInit{

	private users: User[];

	constructor(private userService:UserService){}

	getData(): void{
		this.userService.getUsers().then((response) => {this.users = response});
	}

	ngOnInit(): void{
		this.getData();
	}
}