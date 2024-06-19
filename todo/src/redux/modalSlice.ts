import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { modalWindow: boolean } = { modalWindow: false };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayModal: (state, action: PayloadAction<boolean>) => {
      state.modalWindow = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { displayModal } = modalSlice.actions;

export default modalSlice.reducer;
