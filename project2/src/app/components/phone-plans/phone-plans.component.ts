import { Component, OnInit, Input } from '@angular/core';
import { Phoneplans } from 'src/app/models/phoneplans';
import { PhoneplansService } from 'src/app/services/phoneplans.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-phone-plans',
  templateUrl: './phone-plans.component.html',
  styleUrls: ['./phone-plans.component.css']
})
export class PhonePlansComponent implements OnInit {
  
  phonePlansList: Phoneplans[] = [];
  
  
  
  

  constructor(private planService: PhoneplansService, private msg: MessengerService) { }

  ngOnInit(): void {
    this.phonePlansList = this.planService.getPlans()
  }

  //
  handleAddToCart(phoneplan: any) {
    
    this.msg.sendMsg(phoneplan)
  }
  

}
