import {http} from '@/utils/httpOption';
import {IOrderModel} from './models/Order.model';

class OrderService {
  createOrder(order: IOrderModel) {
    return http.post('orders', order);
  }
}

export default new OrderService();
