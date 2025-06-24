import { Component, OnInit } from '@angular/core';
import { AletifyService, MessageType, Position } from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertify: AletifyService,spinner:NgxSpinnerService) {
    super(spinner)
   }
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom)
  }


 m() {
  this.alertify.message("Merhaba",{
    messageType:MessageType.Success,
    delay:5,
    position:Position.BottomLeft
  });
}

d() {
  this.alertify.dismiss();
}

  }
