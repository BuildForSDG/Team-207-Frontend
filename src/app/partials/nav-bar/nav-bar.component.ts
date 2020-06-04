import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor(public constants: Constants) {}

  ngOnInit(): void {}
}
