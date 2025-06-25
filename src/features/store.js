import { configureStore } from "@reduxjs/toolkit"
import projectReducer from './projectSlice'
import contactReducer from './contactSlice'
const store = configureStore({
    reducer:{
        project: projectReducer,
        contact: contactReducer,
    }
})

export default store