import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

// @Component({
//   selector: 'app-base',
//   standalone: false,
//   templateUrl: './base.component.html',
//   styleUrl: './base.component.scss'
// })
export class BaseComponent {

constructor(private spinner: NgxSpinnerService) { }

showSpinner(spinnerNameType:SpinnerType) {
  this.spinner.show(spinnerNameType);
  setTimeout(() => this.hideSpinner(spinnerNameType), 1000);

}
hideSpinner(spinnerNameType: SpinnerType) {
  this.spinner.hide(spinnerNameType);
}



}
export enum SpinnerType {
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockwiseFadeRotating = "s3"
}
