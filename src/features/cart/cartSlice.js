import axios from "axios";

// createSlice: Permite crear una función que crea un estado de forma independiente
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// createAsyncThunk: Permite crear una función que hace un llamado asincrono al backend

// Estado inicial
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false,
};

const url = "http://localhost:3000/items"

export const getCartItems = createAsyncThunk(
    // Recibe 2 parámetros: Nombre del action - Función que realiza el llamado
    "cart/getCartItems",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong!");
        }
    }
);

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
        calculateTotals: (state) => {
            let totalAmount = 0;
            let totalPrice = 0;
            
            // Recorre los items del cart
            state.cartItems.forEach((item) => {
                totalAmount += item.amount;
                totalPrice += item.amount * item.price;
            });

            // Modifica el estado
            state.amount = totalAmount;
            state.total = totalPrice;
        },
    },

    // extraReducers: Permite extender el reducer raíz del slice actual para manejar acciones
    // de otros slices o acciones globales de la aplicación
    extraReducers: (builder) => {
    // `builder` permite agregar casos de reducer adicionales
        builder
            .addCase(getCartItems.pending, (state) => {
                // Indica que la información está cargando
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                // Indica que la información ya no está cargando
                state.isLoading = false;
                // Obtiene los datos del backend
                state.cartItems = action.payload;
            })
            .addCase(getCartItems.rejected, (state) => {
                // Indica que la información ya no está cargando
                state.isLoading = false;
                state.cartItems = [];
                console.warn("Hubo un error al cargar los datos");
            })
        
    }
});


// Exportar el reducer
export default cartSlice.reducer;
export const { clearCart, removeItem, incrementItemAmount, decreaseItemAmount, calculateTotals } = cartSlice.actions;
