import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../api/users';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = "http://localhost:4631/project2/v1/my-users";
  
  // angular comes with http functionality
  // Injects this into the HttpClient
  // everything is injected as a Singleton 
  constructor(private http : HttpClient) { }
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}`);
  }
  /* addToCart(payload) {
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
  } */
 

  
  
}