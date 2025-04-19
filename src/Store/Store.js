import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Feature/Slice"

export const store = configureStore(
      {
        reducer : {
            cart : cartReducer ,
        }
      }
)