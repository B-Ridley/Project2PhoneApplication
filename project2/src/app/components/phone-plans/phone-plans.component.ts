import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-plans',
  templateUrl: './phone-plans.component.html',
  styleUrls: ['./phone-plans.component.css']
})
export class PhonePlansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  planOptions = [
    {plan_name:'Mystic Unlimited Premium Plan', price: 50.00, 
    data_speed:'4G LTE and 5G LTE where possible', plan_type: 'unlimited talk, text, + high-speed data that will not slow down based on usage', device_limit: 6},
    {plan_name:'Mystic Unlimited Extra Plan', price: 40.00, 
    data_speed:'4G LTE and 5G LTE where possible', plan_type: 'unlimited talk, text, data, + 60GB of Premium Data', device_limit: 5},
    {plan_name:'Mystic Essential Plan', price: 30.00, 
    data_speed:'4G LTE and 5G LTE where possible', plan_type: 'unlimited talk, text, + 50GB of Premium Data', device_limit: 4},
    {plan_name:'Mystic Basic Plan', price: 45.00, 
    data_speed:'4G LTE and 5G LTE where possible', plan_type: '20GB of high-speed data, unlimited data up to 1.5Mbps, unlimited mobile hotspot data at 4G speeds', device_limit: 4},
    {plan_name:'Mystic Family Plan', price: 55.00, 
    data_speed:'4G LTE and 5G LTE where possible', plan_type: 'unlimited talk, text, high-speed data, and customizable features for seniors and children', device_limit: 7}
  ];

  cartPlanList = [];
   
  

}
