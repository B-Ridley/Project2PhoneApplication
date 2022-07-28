/* Used to listen for a message and add/remove items to/from the cart 
  -- This component will allow the add to cart feature to talk to the cart
  -- modified the phone-plans.component.ts file and phone-plans.component.html file to handle the cart 
*/
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  constructor() { }

  
  sendMsg(plans: unknown) {
    console.log(plans)
    this.subject.next(plans) //triggering an event 
  }

  getMsg() {
    return this.subject.asObservable() 

  }
}
