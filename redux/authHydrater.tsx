"use client";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./slices/authSlice";
import { getCart } from "@/services/operations/cartAPI";

export default function AuthHydrator() {
  const dispatch = useDispatch<any>();
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    const token = localStorage.getItem("token");
    const userRaw = localStorage.getItem("user");

   

    if (!token || !userRaw || userRaw === "undefined") return;

    try {
      const user = JSON.parse(userRaw);
      dispatch(loginSuccess({ token, user }));
      dispatch(getCart());
    } catch (err) {
      console.error("Hydration failed", err);
      localStorage.clear();
    }
  }, [dispatch]);

  return null;
}
