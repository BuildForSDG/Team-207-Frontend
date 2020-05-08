// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomCurveComponent } from './bottom-curve/bottom-curve.component';
import { Constants } from '../core/constants';
import { Utils } from '../core/utils';
import { HomeServiceItemComponent } from './home-service-item/home-service-item.component';

@NgModule({
	declarations: [BottomCurveComponent, HomeServiceItemComponent],
	exports: [BottomCurveComponent, HomeServiceItemComponent],
	imports: [
		CommonModule,
	],
	providers: [Constants, Utils]
})
export class SharedModule {
}
