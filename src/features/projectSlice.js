import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3011/projects")
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
