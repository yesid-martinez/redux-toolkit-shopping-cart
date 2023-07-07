// Reducer: Función que recibe el estado actual y la acción a ejecutar, permite modificar el estado
import cartReducer from '../features/cart/cartSlice';

// Importar función para configurar el store
import { configureStore } from '@reduxjs/toolkit';

// Store: Objeto que contiene el estado global de la aplicación
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})