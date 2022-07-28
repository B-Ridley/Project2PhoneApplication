import { Component, OnInit } from '@angular/core';
import { Phoneplans } from 'src/app/models/phoneplans';
import { PhoneplansService } from 'src/app/services/phoneplans.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  phonePlansList: Phoneplans[] = []
  
  constructor(private planService: PhoneplansService) { }

  ngOnInit(): void {
    this.phonePlansList = this.planService.getPlans()
  }

}
