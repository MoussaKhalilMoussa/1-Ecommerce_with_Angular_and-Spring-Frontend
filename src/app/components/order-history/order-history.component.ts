import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryList: OrderHistory[] = [];
  // it allows us to receive the email stored in the browser
  // reference to web browser's seesion storage
  storage: Storage = sessionStorage ;

  constructor(private orderHistoryServices:OrderHistoryService){

  }

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    // read the user's emial address browser storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // retrieve data from the service 
    this.orderHistoryServices.getOrderHistory(theEmail).subscribe(
      data => {
        // assign data
        this.orderHistoryList = data._embedded.orders;
      }
    );
  }

}
