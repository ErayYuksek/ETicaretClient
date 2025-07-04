import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent extends BaseComponent implements OnInit {

  constructor(spinnner:NgxSpinnerService){
    super(spinnner)
  }

  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom)
  }
}
