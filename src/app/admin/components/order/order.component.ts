import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit():void
  {
      this.spinner.show("s2");
      setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide("s2");
}, 5000);

  }
}
