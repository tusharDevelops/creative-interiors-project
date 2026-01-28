"use client";

import { toast } from "sonner";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apiEndpoint";
import {
  loginSuccess,
  updateUser,
  logout as logoutAction,
  setLoading,
} from "@/redux/slices/authSlice";

import { getCart } from "@/services/operations/cartAPI";
import { setCart } from "@/redux/slices/cartSlice";
import { clearCart } from "@/redux/slices/cartSlice";


const {
  SEND_OTP_API,
  VERIFY_OTP_API,
  ONBOARD_USER_API,
} = authEndpoints;

/* =========================================================
   SEND OTP
========================================================= */
export function sendOtp(email: string, navigate: (path: string) => void) {
  return async (dispatch: any) => {
    dispatch(setLoading(true));

    try {
      await apiConnector("POST", SEND_OTP_API, { email });

      toast("OTP Sent", {
        description: "Please check your email for the OTP",
      });

      navigate("/verify-otp");
    } catch (error: any) {
      console.error("SEND OTP ERROR", error);

      toast("Failed to send OTP", {
        description: error?.response?.data?.message || "Try again later",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
}

/* =========================================================
   VERIFY OTP
========================================================= */
export function verifyOtp(
  email: string,
  otp: string,
  navigate: (path: string) => void
) {
  return async (dispatch: any) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", VERIFY_OTP_API, {
        email,
        otp,
      });

      const { token, role, onBoard } = response.data;

      const user = {
        email,
        role,
        onBoard,
      };
      // user = { email, role, onBoard, name?, phoneNumber? }

      if (!token) {
        throw new Error("Invalid OTP");
      }

      dispatch(
  loginSuccess({
    token,
    user,
  })
);

// ✅ ONLY HERE save
localStorage.setItem("token", token);
localStorage.setItem("user", JSON.stringify(user));


      toast("Login Successful", {
        description: "You have been authenticated successfully",
      });

      /* CART HYDRATION START */
      try {
        const cartResponse = await dispatch(getCart());
        dispatch(setCart(cartResponse.items || []));
      } catch (e) {
        console.warn("Cart not loaded yet");
      }
      /* CART HYDRATION END */

      

      // 🔀 Onboarding decision
      if (user.onBoard) {
        navigate("/dashboard");
      } else {
        navigate("/onboarding");
      }
    } catch (error: any) {
      console.error("VERIFY OTP ERROR", error);

      toast("OTP Verification Failed", {
        description: error?.response?.data?.message || "Invalid or expired OTP",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
}

/* =========================================================
   ONBOARD USER (AUTH REQUIRED)
========================================================= */
export function onboardUser(
  name: string,
  phoneNumber: string,
  navigate: (path: string) => void
) {
  return async (dispatch: any) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("PUT", ONBOARD_USER_API, {
        name,
        phoneNumber,
      });

      const updatedUser = response.data.user;

      // 🔹 Redux update
      dispatch(updateUser(updatedUser));

      // 🔹 Persist updated user
      localStorage.setItem("user", JSON.stringify(updatedUser));

      toast("Profile Completed", {
        description: "Welcome to Creative Interiors",
      });

      navigate("/dashboard");
    } catch (error: any) {
      console.error("ONBOARD ERROR", error);

      toast("Onboarding Failed", {
        description: error?.response?.data?.message || "Please try again",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
}

/* =========================================================
   LOGOUT
========================================================= */
export function logout(navigate: (path: string) => void) {
  return (dispatch: any) => {
    dispatch(logoutAction());
    dispatch(clearCart());

    // Clear persistence
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast("Logged out", {
      description: "You have been logged out successfully",
    });

    navigate("/");
  };
}
