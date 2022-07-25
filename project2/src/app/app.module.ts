import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PhonePlansComponent } from './components/phone-plans/phone-plans.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MonthlybillComponent } from './components/monthlybill/monthlybill.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ModifyplanComponent } from './components/modifyplan/modifyplan.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserAccountComponent,
    PhonePlansComponent,
    MenuComponent,
    MonthlybillComponent,
    AdduserComponent,
    ModifyplanComponent,
    CartComponent,
    ViewcartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopperjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
