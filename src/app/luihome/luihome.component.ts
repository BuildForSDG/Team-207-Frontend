import { Component } from '@angular/core';

import { User } from './../models/user';
import { AccountService } from  '.././services/';

@Component({
    selector: 'app-luihome',
    templateUrl: './luihome.component.html',
    styleUrls: ['./luihome.component.scss']
})
export class LuiHomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}
