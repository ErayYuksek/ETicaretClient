  import { Component, OnInit } from '@angular/core';
  import { Create_Product } from '../../../../contracts/Create_Product';
  import { ProductService } from '../../../../services/common/models/product.service';
  import { BaseComponent, SpinnerType } from '../../../../base/base.component';
  import { NgxSpinnerService } from 'ngx-spinner';
  import { AletifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

  @Component({
    selector: 'app-create',
    standalone: false,
    templateUrl: './create.component.html',
    styleUrl: './create.component.scss'
  })
  export class CreateComponent extends BaseComponent implements OnInit{


    constructor(spiner: NgxSpinnerService, private productService: ProductService, private alertify: AletifyService) {
      super(spiner);
    }


    ngOnInit(): void {
       
      }

    create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {

      this.showSpinner(SpinnerType.BallAtom);
      const create_product: Create_Product = new Create_Product();
      create_product.name = name.value;
      create_product.stock = parseInt(stock.value);
      create_product.price = parseFloat(price.value);

      //if (!name.value) {
      //  this.alertify.message("Lütfen ürün adını giriniz!", {
      //    dismissOthers: true,
      //    messageType: MessageType.Error,
      //    position: Position.TopRight
      //  });
      //  return;
      //}

      //if (parseInt(stock.value) < 0) {
      //  this.alertify.message("Lütfen stok bilgisini doğru giriniz.", {
      //    dismissOthers: true,
      //    messageType: MessageType.Error,
      //    position: Position.TopRight
      //  });
      //  return;
      //}


      this.productService.create(create_product, () => {
        this.hideSpinner(SpinnerType.BallAtom);
        this.alertify.message("Ürün başarıyla eklenmiştir.", {
          dismissOthers: true,
          messageType: MessageType.Success,
          position: Position.TopRight
        });
      }, errorMessage => {
        this.alertify.message(errorMessage, {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopRight
    
      });


      }); // ←
      // create_product.name = "Kalem" kullanıcının girdigi veriyi alır

      }
    }
  
  


