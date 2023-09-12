import { configureStore } from '@reduxjs/toolkit'
import allergicReducer from '../features/allergicTo/counterSlice'
import categorySlice from '../features/category/categorySlice'
import productSlice from '../features/product/productSlice'
import requirementsSlice from '../features/requirements/requirementsSlice'
import restaurantSlice from '../features/restaurant/restaurantSlice'

export const store = configureStore({
  reducer: {
    allergic: allergicReducer,
    category: categorySlice,
    product: productSlice,
    requirements: requirementsSlice,
    restaurant: restaurantSlice
  },
})