import { createStore } from 'effector';

import type { Order } from '../types';

export const $regularPrice = createStore(0);
export const $currentOrderId = createStore('');
export const $userOrder = createStore<Order | null>(null);
export const $userOrderStatus = $userOrder.map((order) => order?.status);
export const $userOrderReportId = $userOrder.map((order) => order?.user_report);
