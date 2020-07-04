import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user.service';
import { User } from '../../app/models/user';

@Component({
    selector: 'app-git',
    templateUrl: './git.component.html',
    styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

    user = {} as User;
    users: User[];
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        const init = Math.random() * 100000;
        this.userService.get(`users?since=${init}`).subscribe((users: User[]) => {
            this.users = users;
        });
    }

}
