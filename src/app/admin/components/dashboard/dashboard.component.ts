import { Component, OnInit } from '@angular/core';
import { AletifyService, MessageType, Position } from '../../../services/admin/alertify.service';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private alertify: AletifyService) { }
  ngOnInit(): void {

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
