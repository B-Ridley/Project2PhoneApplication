import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import files for app navigation 
import { UserAccountComponent } from './user-account/user-account.component';
import { PhonePlansComponent } from './components/phone-plans/phone-plans.component';
import { HomeComponent } from './components/home';
import { AdduserComponent } from './components/adduser/adduser.component';
import { MonthlybillComponent } from './components/monthlybill/monthlybill.component';
import { ModifyplanComponent } from './components/modifyplan/modifyplan.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewcartComponent } from './components/viewcart/viewcart.component';

const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'myaccount', component: UserAccountComponent},
  {path: 'phoneplans', component: PhonePlansComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'billing', component: MonthlybillComponent},
  {path: 'modify', component: ModifyplanComponent},
  {path: 'cart', component: CartComponent},
  {path: 'view', component: ViewcartComponent},
  

  // redirect to home
  {path: '**', redirectTo: ''}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}; 
