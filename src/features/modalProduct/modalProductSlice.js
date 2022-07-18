import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    slug: '',
};
export const modalProductSlice = createSlice({
    name: 'modalProduct',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.slug = action.payload.slug;
        },
        closeModal: (state) => {
            state.slug = '';
        },
    },
});

export const { openModal, closeModal } = modalProductSlice.actions;

export default modalProductSlice.reducer;
