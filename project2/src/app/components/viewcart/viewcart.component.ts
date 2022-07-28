import { Component, OnInit, Input } from '@angular/core';
import { Phoneplans } from 'src/app/models/phoneplans';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  //start off with an empty cart 
  cartItems = [
  // {id: 1, planId: 1, planName: 'Test 1', qty: 4, price: 100},
  // {id: 2, planId: 2, planName: 'Test 2', qty: 3, price: 150},
   //{id: 3, planId: 4, planName: 'Test 3', qty: 5, price: 50},
  // {id: 4, planId: 3, planName: 'Test 4', qty: 2, price: 60},
  ];

  cartTotal = 0;
  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    /*this.msg.getMsg().subscribe((plans: Phoneplans) => {

      this.cartItems.push({
        planName: plans.plan_name,
        qty: 1, 
        price: plans.plan_price
      })
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      })
    }) */

 
     
    
  }

}
