import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = {
  items: [],
}

const cartReducer = (state, action) => {

  switch (action.type) {

    case 'ADD_TO_CART':{
      const exists = state.items.find(item => item.id === action.payload.id)
      if (exists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state
  }
}
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cartItems: state.items, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}