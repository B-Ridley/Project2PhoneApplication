/* Used to listen for a message and add items to the cart 
  -- This component will allow the add to cart feature to talk to the cart
  -- can't figure out what I'm doing wrong with this one

  -- modified the phone-plans.component.ts file and phone-plans.component.html file to handle the cart 
*/
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Phoneplans } from '../models/phoneplans';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()
  constructor() { }

  // error: plans wasn't found on component so I had to define it as undefined (I tried troubleshooting this issue multiple times,
  //because my variables are correct I think )
  sendMsg(plans: unknown) {
    console.log(plans)
    this.subject.next(plans) //triggering an event 
  }

  getMsg() {
    return this.subject.asObservable() 

  }
}
