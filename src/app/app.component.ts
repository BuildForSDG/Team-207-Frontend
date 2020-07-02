import { Component } from '@angular/core';
import { AccountService } from './services/account.services';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digits';

  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  // logout() {
  //   this.accountService.logout();
  // }
}
