import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../app/services/user.service';
import { User } from '../../app/models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    login: string;
    user = {} as User;
    constructor(
        private route: ActivatedRoute,
        private userService: UserService
        ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.login = params['id'];
            this.userService.getByName(`users/${this.login}`).subscribe((user: User) => {
                this.user = user;
                this.userService.getFullUrl(user.repos_url).subscribe((response) => {
                    this.user.repositorios = response;
                    console.log(this.user)
                })
            })
        });
    }

}
