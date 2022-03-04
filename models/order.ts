// import * as moment from 'moment';

import moment from 'moment';

export interface OrderType {
  id: any;
  items: any;
  totalAmount: number;
  date: any;
}

class Order {
  id: any;
  items: any;
  totalAmount: number;
  date: any;

  constructor(id: any, items: any, totalAmount: number, date: any) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
  get readableDate() {
    // return this.date.toLocaleDateString('en-EN', {
    //   year: 'numeric',
    //   month: 'long',
    //   date: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    return moment(this.date).format('Do MMMM YYYY hh:mm a');
  }
}

export default Order;
