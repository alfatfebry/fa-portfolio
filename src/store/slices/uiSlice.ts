import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Bentuk tipe state untuk slie ini
interface uiState {
  isMenuOpen: boolean;
}

// Nilai awal saat aplikasi pertama kali jalan
const initialState: uiState = {
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // aksi tanpa data tambahan
    toggleMenu(state){
      state.isMenuOpen = !state.isMenuOpen;
    },

    setMenuOpen(state, action: PayloadAction<boolean>){
      state.isMenuOpen = action.payload;
    },
  },
});



export const {toggleMenu, setMenuOpen} = uiSlice.actions;

export default uiSlice.reducer;