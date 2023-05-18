import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    title: null,
    rating: null,
    reviews: null,
    category: null,
    address: null,
    logoImgUrl: null,
    shortDesc: null,
    dishes: null,
    imgUrl: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectrestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
