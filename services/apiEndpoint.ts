export const AUTH_BASE_URL = "http://localhost:8080/api";
export const PRODUCT_BASE_URL = "http://localhost:5002/api";
export const CART_BASE_URL = "http://localhost:5232/api";
export const ORDER_BASE_URL = "http://localhost:6002/api"; 


export const GATEWAY_BASE_URL = "http://localhost:7000/api";


// ===============================
// AUTH SERVICE ENDPOINTS
// ===============================
export const authEndpoints = {
  SEND_OTP_API: GATEWAY_BASE_URL + "/auth/send-otp",
  VERIFY_OTP_API: GATEWAY_BASE_URL + "/auth/verify-otp",
  ONBOARD_USER_API: GATEWAY_BASE_URL + "/user/onboard",
};

// ===============================
// PRODUCT SERVICE ENDPOINTS
// ===============================
export const productEndpoints = {
  // Categories
  GET_CATEGORIES_API: GATEWAY_BASE_URL + "/categories",
  GET_CATEGORY_BY_SLUG_API: (slug: string) =>
    GATEWAY_BASE_URL + `/categories/${slug}`,
  GET_SUB_CATEGORIES_API: (parentId: string) =>
    GATEWAY_BASE_URL + `/categories/parent/${parentId}`,

  // Materials
  GET_MATERIALS_BY_CATEGORY_API: (categoryId: string) =>
    GATEWAY_BASE_URL + `/materials/category/${categoryId}`,
  GET_SELECTABLE_MATERIALS_API: (categoryId: string) =>
    GATEWAY_BASE_URL + `/materials/category/${categoryId}/selectable`,

  // Catalogues
  GET_CATALOGUES_BY_CATEGORY_API: (categoryId: string) =>
    GATEWAY_BASE_URL + `/catalogues/category/${categoryId}`,
  GET_CATALOGUE_BY_ID_API: (catalogueId: string) =>
    GATEWAY_BASE_URL + `/catalogues/${catalogueId}`,
};



// ===============================
// CART SERVICE ENDPOINTS
// ===============================
export const cartEndpoints = {
  GET_CART_API: GATEWAY_BASE_URL + "/cart/",
  ADD_TO_CART_API: GATEWAY_BASE_URL + "/cart/add",
  UPDATE_CART_ITEM_API: (cartItemId: string) =>
    GATEWAY_BASE_URL + `/cart/item/${cartItemId}`,
  REMOVE_CART_ITEM_API: (cartItemId: string) =>
    GATEWAY_BASE_URL + `/cart/item/${cartItemId}`,
  CLEAR_CART_API: GATEWAY_BASE_URL + "/cart/clear",
};

// ===============================
// ORDER SERVICE ENDPOINTS
// ===============================
export const orderEndpoints = {
  CREATE_ORDER_API: GATEWAY_BASE_URL + "/orders/",
  GET_MY_ORDERS_API: GATEWAY_BASE_URL + "/orders/",
  GET_ORDER_BY_ID_API: (orderId: string) =>
    GATEWAY_BASE_URL + `/orders/${orderId}`,
};
