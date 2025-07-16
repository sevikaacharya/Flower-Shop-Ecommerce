import { configureStore } from '@reduxjs/toolkit'
import addcartReducer from '../slice/addTocartSlice.js'

export const store = configureStore({
  reducer: {
    itemsInCart:addcartReducer
  },
})