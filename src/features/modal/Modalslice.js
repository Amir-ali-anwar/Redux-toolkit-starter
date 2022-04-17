import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOPen: false
}
const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOPen = true;
        },
        closeModal: (state, action) => {
            state.isOPen = false;
        },
    }
})
export const { openModal, closeModal } = ModalSlice.actions
export default ModalSlice.reducer