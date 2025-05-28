// This file demonstrates typical usage of Redux Toolkit's createSlice function
// for defining reducer logic and actions, as well as related thunks and selectors.

import { Product } from "@/features/product/models/Product"
import { RootState } from "@/store/store"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

// Define the TS type for the counter slice's state
export interface CartState {
  products: Product[]
  status: "pending" | "checkout" | "paid"
}

// Define the initial value for the slice state
const initialState: CartState = {
  products: [],
  status: "pending",
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToCard: (state, action: PayloadAction<Product>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload.id
      )
    },
  },
})

// Export the generated action creators for use in components
export const { addToCard, removeFromCart } = cartSlice.actions

// Export the slice reducer for use in the store configuration
export default cartSlice.reducer

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectProducts = (state: RootState) => state.cart.products
export const selectStatus = (state: RootState) => state.cart.status
