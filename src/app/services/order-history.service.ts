import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderHistory } from '../common/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private orderUrl = environment.luv2shopApiUrl + '/orders';

  constructor(private httpClient: HttpClient) { }
  
  getOrderHistory(theEmail: string):Observable <GetResponseOrderHistory>{
    // need to build URL based on the customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;

    // orderHistory method calls the REST API
    // GetResponseOrderHistory an special method that we use to acces
    // the JSON that has been returned 
    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }
}

interface GetResponseOrderHistory {
  _embedded :{
    // Unwrap the JSON from Spring Data REST _embedded entry
    // we are just map them those to an array of order History items
    orders:OrderHistory[];

  }
}
