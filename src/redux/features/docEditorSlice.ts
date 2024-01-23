import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  service_details: "",
};
const docEditorSlice = createSlice({
  name: "docEditor",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.service_details = action.payload;
    },
  },
});

export const { setText } = docEditorSlice.actions;

export default docEditorSlice.reducer;
