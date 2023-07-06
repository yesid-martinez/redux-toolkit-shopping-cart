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
    },
});


// Exportar el reducer
export default cartSlice.reducer;
export const { clearCart, removeItem } = cartSlice.actions;