import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date : Date = new Date();

  constructor(
    public constants : Constants,
  ) { }

  ngOnInit(): void {
  }

}
