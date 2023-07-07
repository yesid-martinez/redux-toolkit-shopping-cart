import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        // `state` Hace referencia a initialSate
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    }
});

// Exporta el Slice con reducer
export default modalSlice.reducer;

// Exporta los reducers (actions)
export const { openModal } = modalSlice.actions;
export const { closeModal } = modalSlice.actions;