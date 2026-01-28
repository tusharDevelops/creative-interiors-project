"use client";

import { toast } from "sonner";
import { apiConnector } from "../apiConnector";
import { orderEndpoints } from "../apiEndpoint";

const {
  CREATE_ORDER_API,
  GET_MY_ORDERS_API,
  GET_ORDER_BY_ID_API,
} = orderEndpoints;

/* =========================================================
   CREATE ORDER
   👉 cart ka snapshot frontend se bhejna hai
========================================================= */
export function createOrder(cart: any) {
  return async () => {
    try {
      const toastId = toast.loading("Placing order...");

      const payload = {
        cartSnapshot: {
          grandTotal: cart.grandTotal,
          items: cart.items.map((item: any) => ({
            productType: item.productType,
            productRefId: item.productRefId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
            configurationJson: item.configurationJson,
          })),
        },
      };

      const response = await apiConnector(
        "POST",
        CREATE_ORDER_API,
        payload
      );

      toast.success("Order placed successfully 🎉");
      toast.dismiss(toastId);

      return response.data;
    } catch (error: any) {
      console.error("CREATE ORDER ERROR", error);
      toast.error("Failed to place order");
      throw error;
    }
  };
}

/* =========================================================
   GET MY ORDERS (USER)
========================================================= */
export function getMyOrders() {
  return async () => {
    try {
      const response = await apiConnector(
        "GET",
        GET_MY_ORDERS_API
      );

      return response.data;
    } catch (error: any) {
      console.error("GET MY ORDERS ERROR", error);
      toast.error("Failed to load orders");
      throw error;
    }
  };
}

/* =========================================================
   GET ORDER BY ID
========================================================= */
export function getOrderById(orderId: string) {
  return async () => {
    try {
      const response = await apiConnector(
        "GET",
        GET_ORDER_BY_ID_API(orderId)
      );

      return response.data;
    } catch (error: any) {
      console.error("GET ORDER ERROR", error);
      toast.error("Failed to load order details");
      throw error;
    }
  };
}
