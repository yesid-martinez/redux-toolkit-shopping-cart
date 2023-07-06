import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../data/cartItems";

// Estado inicial
const initialState = {
    cartItems,
    amount: 0,
    total: 0,
};

// Creación del slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            // Obtiene el id del articulo a eliminar
            const itemId = action.payload;

            // Filtra los articulos y quita el que coincida con el id
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        incrementItemAmount: (state, action) => {
            
            const itemId = action.payload;

            // Busca el articulo en el carrito
            const item = state.cartItems.find((item) => item.id === itemId);

            // Incrementa el valor del articulo
            item.amount += 1;
        
        },
        decreaseItemAmount: (state, action) => {
            
            const itemId = action.payload;

            // Busca el articulo en el carrito
            const item = state.cartItems.find((item) => item.id === itemId);

            // Decreme el valor del articulo
            item.amount -= 1;
        
        
        },
    },
});


// Exportar el reducer
export default cartSlice.reducer;
export const { clearCart, removeItem, incrementItemAmount, decreaseItemAmount } = cartSlice.actions;