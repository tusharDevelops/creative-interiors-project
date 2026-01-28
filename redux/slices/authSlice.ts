import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "USER" | "ADMIN" | "SELLER";

export interface User {
  email: string;
  name?: string;
  phoneNumber?: string;
  role: UserRole;
  onBoard: boolean;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ After OTP verification
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },

    // ✅ Update user after onboarding
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    // ✅ Logout
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, updateUser, logout, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
