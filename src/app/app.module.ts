import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  AdminModule,
  UiModule,
  ToastrModule.forRoot(),
  NgxSpinnerModule
  ],
  providers: [
    {
      provide:"baseUrl",useValue: "https://localhost:7006/api",multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


