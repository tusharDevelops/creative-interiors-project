"use client";

import { toast } from "sonner";
import { apiConnector } from "../apiConnector";
import { cartEndpoints } from "../apiEndpoint";

import {
  setCart,
  addItem,
  updateItemQuantity,
  removeItem,
  clearCart as clearCartAction,
  setLoading,
} from "@/redux/slices/cartSlice";
import { get } from "http";


const {
  GET_CART_API,
  ADD_TO_CART_API,
  UPDATE_CART_ITEM_API,
  REMOVE_CART_ITEM_API,
  CLEAR_CART_API,
} = cartEndpoints;

/* =========================================================
   GET CART
========================================================= */
export function getCart() {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));

      const response = await apiConnector("GET", GET_CART_API);

      console.log("GET CART RESPONSE", response);

      // 🔥 THIS IS THE MISSING LINE
      dispatch(setCart(response.data.items));
      return response.data.items;

     
    } catch (error: any) {
      console.error("GET CART ERROR", error);
      toast("Failed to load cart");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
}


/* =========================================================
   ADD ITEM TO CART
========================================================= */
export function addToCart(payload: {
  productType: string;
  productRefId: string;
  configurationJson: string;
  quantity: number;
  unitPrice: number;
}) {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));

      const response = await apiConnector(
        "POST",
        ADD_TO_CART_API,
        payload
      );
      console.log("ADD TO CART RESPONSE", response);

      // 🔥 backend se latest cart ya item lo
      //dispatch(addItem(response.data.items));
      dispatch(getCart());

     

      toast("Item added to cart");
      return response.data;
    } catch (error: any) {
      console.error("ADD TO CART ERROR", error);
      toast("Failed to add item,Make sure you are logged in");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
}


/* =========================================================
   UPDATE CART ITEM QUANTITY
========================================================= */
export function updateCartItem(cartItemId: string, quantity: number) {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));

      await apiConnector(
        "PUT",
        UPDATE_CART_ITEM_API(cartItemId),
        { quantity }
      );

      dispatch(updateItemQuantity({ id: cartItemId, quantity }));

      toast("Cart updated");
    } catch (error: any) {
      console.error("UPDATE CART ITEM ERROR", error);
      toast("Failed to update item");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
}


/* =========================================================
   REMOVE CART ITEM
========================================================= */
export function removeCartItem(cartItemId: string) {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));

      await apiConnector(
        "DELETE",
        REMOVE_CART_ITEM_API(cartItemId)
      );

      dispatch(removeItem(cartItemId));

      toast("Item removed");
    } catch (error: any) {
      console.error("REMOVE CART ITEM ERROR", error);
      toast("Failed to remove item");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
}


/* =========================================================
   CLEAR CART
========================================================= */
export function clearCart() {
  return async (dispatch: any) => {
    try {
      dispatch(setLoading(true));

      await apiConnector("DELETE", CLEAR_CART_API);

      dispatch(clearCartAction());

      toast("Cart cleared");
    } catch (error: any) {
      console.error("CLEAR CART ERROR", error);
      toast("Failed to clear cart");
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };
}

