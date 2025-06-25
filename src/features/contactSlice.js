import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API = "https://portfolio-backend-mongo-nwj1.onrender.com/api/contacts"; // ✅ Đã sửa

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (newContact, { rejectWithValue }) => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact)
      });
      if (!res.ok) throw new Error("Failed to add contact");
      return await res.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload); // ✅ sửa "tasks" → "contacts"
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
