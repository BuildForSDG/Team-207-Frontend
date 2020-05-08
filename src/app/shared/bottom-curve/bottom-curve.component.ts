import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-curve',
  templateUrl: './bottom-curve.component.html',
  styleUrls: ['./bottom-curve.component.scss']
})
export class BottomCurveComponent implements OnInit {
  @Input() class = 'text-dark';

  constructor() { }

  ngOnInit(): void {
  }

}
