import { createSlice } from "@reduxjs/toolkit";
// import { fetchData, fetchDataSuccess, fetchDataFailure } from "./actions";

const dataSlice = createSlice({
  name: "data",
  initialState: { loading: false, data: [], error: null },
  reducers: {
    fetchData: (state) => {
      // [fetchData.type]: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      // [fetchDataSuccess.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      // [fetchDataFailure.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export default dataSlice.reducer;

// export default dataSlice;
