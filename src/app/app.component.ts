import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // standalone: true,
  styleUrl: './app.component.scss',
  imports:[RouterModule,NgxSpinnerModule]
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor() {

    };

}


// $.get("https://localhost:7006/api/products",data=>
// {
//   console.log(data)
// }
// )





// Tarayıcı üzerinden https://localhost:7006/api/products adresine bir GET isteği atıyor.


