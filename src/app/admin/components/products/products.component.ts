import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { identity } from 'rxjs';



@Component({
  selector: 'app-admin-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'

})

export class ProductsComponent extends BaseComponent implements OnInit {


  constructor(spinner: NgxSpinnerService,private httpClientService:HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {


    // this.showSpinner(SpinnerType.BallAtom);

    // this.httpClientService.get({

    //     controller:"products"

    // }).subscribe(data=>console.log(data))



//  this.httpClientService.post({
//    controller: "products"
//  }, {
//    name: "Kalem",
//    stock: 100,
//    price: 15
//  }).subscribe()

// this.httpClientService.post({
//   controller: "products"
// }, {
//   name: "kagıt",
//   stock: 100,
//   price: 15
// }).subscribe()

// this.httpClientService.post({
//   controller: "products"
// }, {
//   name: "Kalem",
//   stock: 100,
//   price: 15
// }).subscribe()

//  this.httpClientService.post({
//    controller: "products"
//  }, {
//    name: "kagıt",
//    stock: 100,
//    price: 15
//  }).subscribe()

//  this.httpClientService.put({
//    controller:"products",
//  },{
//    id:"0197a683-02eb-7c62-863d-5aa773c390f9",
//    name:"Dopamin",
//    stock:11,
//    price:999
//  }).subscribe()

// this.httpClientService.delete({
//   controller: "products"
// }, "0197a89f-1cec-7bc5-a545-88a7b1e97330")
// .subscribe(() => {
//   console.log("Silme işlemi başarılı.");
// });

// this.httpClientService.get({
//   baseUrl: "https://jsonplaceholder.typicode.com",
//   controller: "posts"
// }).subscribe(data => console.log(data));

// Contract Mantıgı Denir
// this.httpClientService.get<Product[]>({
//   controller: "products"
// }).subscribe(data => {
//   console.log(data);
// });


// this.httpClientService.get<Product[]>({
//   controller: "products"
// }).subscribe(data => {
//   console.log(data=>console.log(data));
// });

// this.showSpinner(SpinnerType.BallAtom);

// this.httpClientService.get<Product[]>({
//   controller: "products"
// }).subscribe(data => console.log(data));

  }
}
