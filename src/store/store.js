// Importar el reducer
import cartReducer from '../features/cart/cartSlice';

// Importar función para configurar el store
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})