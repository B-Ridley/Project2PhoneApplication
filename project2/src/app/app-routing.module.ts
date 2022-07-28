import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components for app navigation 
import { UserAccountComponent } from './user-account/user-account.component';
import { PhonePlansComponent } from './components/phone-plans/phone-plans.component';
import { HomeComponent } from './components/home';
import { AdduserComponent } from './components/adduser/adduser.component';
import { MonthlybillComponent } from './components/monthlybill/monthlybill.component';
import { ModifyplanComponent } from './components/modifyplan/modifyplan.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [

  // The different endpoints for the application 
  {path: '', component: HomeComponent },
  {path: 'myaccount', component: UserAccountComponent},
  {path: 'phoneplans', component: PhonePlansComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'billing', component: MonthlybillComponent},
  {path: 'modify', component: ModifyplanComponent},
  {path: 'cart', component: CartComponent},       //This is the shopping view for the user where they can add things
  {path: 'view', component: ViewcartComponent},  //this is the actual cart view after items have been added  
  {path: 'pay', component: PaymentComponent},
  

  // redirect to home
  {path: '**', redirectTo: ''}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}; 
