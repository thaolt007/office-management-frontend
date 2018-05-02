import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Checkout } from './Checkout';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class CheckoutService {
  apiCheckoutUrl = 'http://localhost:8080/api/checkout/';
  constructor(private http: HttpClient) { }

  isCheckoutDone(checkinId: number, date: Date): Observable<Checkout> {
    // console.log('checkout.service isCheckoutDone method');
    return this.http.post<Checkout>(this.apiCheckoutUrl.concat('check/',checkinId.toString()), date, httpOptions).pipe();
  }
  
  saveCheckout(checkout: Checkout): Observable<Checkout> {
    // console.log('checkout.service  saveCheckout method');
    return this.http.post<Checkout>(this.apiCheckoutUrl.concat('submit'), checkout, httpOptions).pipe();
  }
}
