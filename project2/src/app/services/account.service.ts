import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = "http://localhost:4631/my-users";
  
  // angular comes with http functionality
  // Injects this into the HttpClient
  // everything is injected as a Singleton 
  constructor(private http : HttpClient) { }
  getAllPlans() {
    return this.http.get(`${environment.baseURL}/phoneplans`);
    
  }
  addToCart(payload) {
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }
  getCartItems() {
    return this.http.get(`${environment.baseURL}/cart`);
  }
  increaseQty(payload) {
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }
  emptyCart() {
    return this.http.delete(`${environment.baseURL}/cart/empty-cart`);
  }
 

  
  
}