import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from 'src/app/services/account.services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(userId: string) {
        const user = this.users.find(x => x.userId === userId);
        user.isDeleting = true;
        this.accountService.delete(userId)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.userId !== userId)
            });
    }
}