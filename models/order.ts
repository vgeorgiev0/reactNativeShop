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
}

export default Order;
