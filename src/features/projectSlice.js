import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const API = "https://portfolio-backend-mongo-nwj1.onrender.com/api/projects"

export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(API)
      if (!res.ok) throw new Error("Lỗi khi gọi API")
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  projects: [],
  isLoading: false,
  error: null,
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.isLoading = false
        state.projects = action.payload
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default projectSlice.reducer
