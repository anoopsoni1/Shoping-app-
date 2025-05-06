import { createSlice  ,nanoid} from "@reduxjs/toolkit";

 const initialState = {
    cartitem : [] ,
 } 

  const  cartslice = createSlice({
    name : 'cart' ,
    initialState ,
      reducers : {
        addtocart(state ,action) { 
         const item =action.payload ;
        const existingitem = state.cartitem.find(i => i.id === item.id)
   
if(existingitem){
    existingitem.quantity += 1;
}  else{
    state.cartitem.push({...item , quantity : 1 })
}
        },
        addtobuy(state ,action) { 
          const item =action.payload ;
         const existingitem = state.cartitem.find(i => i.id === item.id)
    
 if(existingitem){
     existingitem.quantity += 1;
 }  else{
     state.cartitem.push({...item , quantity : 1 })
 }
         },

        removefromcart: (state, action) => {
            state.cartitem = state.cartitem.filter(item => item.id !== action.payload);
          },
          removefrombuy: (state, action) => {
            state.cartitem = state.cartitem.filter(item => item.id !== action.payload);
          },
      }
  })

  export const {addtocart,addtobuy ,removefromcart,setCartFromLocalStorage ,removefrombuy} = cartslice.actions; 
    
     export default cartslice.reducer 