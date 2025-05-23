import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";
const initialState={
    cartList:[

    ],
    total:0
}


const CartContext = createContext(initialState);
export const CartProvider = ({children}) => {
    const [state,dispatch]= useReducer(cartReducer,initialState)
 
    const AddToCart=(product)=>{
       const updatedCartList= state.cartList.concat(product)
       
        UpdateTotal(updatedCartList)

       dispatch({
        type:"ADD_TO_CART",
        payload:{
            products:updatedCartList
        }
       })
    }


    const RemoveFromCart=(product)=>{
        const updatedCartList= state.cartList.filter(current=>current.id !== product.id )

        UpdateTotal(updatedCartList)
        
        dispatch({
            type:"REMOVE_FROM_CART",
        payload:{
            products:updatedCartList
        }        })
    }

    const UpdateTotal =(products)=> {
        let total=0;
        products.forEach(product => total = total+product.price);
        
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                total
            }
        })
    }

    const value={
        total:state.total,
        cartList:state.cartList,
        AddToCart,RemoveFromCart
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    const context= useContext(CartContext)
    return context;
}