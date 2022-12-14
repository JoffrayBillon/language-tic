import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticList: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTic: (state, action) => {
      state.ticList.push({ value: action.payload, times: 0 });
    },
    removeTic: (state, action) => {
      state.ticList.splice(action.payload, 1);
    },
    incrementTic: (state, action) => {
      state.ticList[action.payload].times += 1;
    },
    decrementTic: (state, action) => {
      state.ticList[action.payload].times -= 1;
    },
    setTic: (state, action) => {
      state.ticList[action.payload.index].times = action.payload.value;
    },
  },
});

export const { addTic, removeTic, incrementTic, decrementTic, setTic } =
  counterSlice.actions;

export default counterSlice.reducer;
