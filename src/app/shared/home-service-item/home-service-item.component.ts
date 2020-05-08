import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-service-item',
  templateUrl: './home-service-item.component.html',
  styleUrls: ['./home-service-item.component.scss']
})
export class HomeServiceItemComponent implements OnInit {
  @Input() bg = "bg-primary";
  @Input() icon = "las la-car-side";
  @Input() title = "Car Insurance";
  @Input() description = "";

  constructor() { }

  ngOnInit(): void {
  }

}
