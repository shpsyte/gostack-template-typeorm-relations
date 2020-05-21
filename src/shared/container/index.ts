import { container } from 'tsyringe';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository';

// register singelton
container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

// register singelton

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

// register singelton
container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
