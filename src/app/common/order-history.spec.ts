import { OrderHistory } from './order-history';

describe('OrderHistory', () => {
  it('should create an instance', () => {
    expect(new OrderHistory("", "", 0, 0, undefined!)).toBeTruthy();
  });
});
