import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { User } from '../models/user';
//import { AccountService } from  '../services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    user: User = new User();

    constructor(activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe((params) => {
            this.user.firstname = params['firstname'];
        });
    }

    ngOnInit() {

    }

    // constructor(private accountService: AccountService) {
    //     this.user = this.accountService.userValue;
    }
     class User {
        firstname: string;
     }
