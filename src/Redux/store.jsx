import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./Slices/userSlice"

const mystore = configureStore({
  reducer: {
    user: userReducer
  },
})

export default mystore