import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{
        setOrigin: (state, {payload}) => {
            state.origin = payload
        },
        setDestination: (state, {payload}) => {
            state.destination = payload
        },
        setTravelTimeInfo: (state, {payload}) => {
            state.travelTimeInfo = payload
        },
    }
})

export const {setDestination, setOrigin, setTravelTimeInfo} = navSlice.actions

export const selectOrigin = state => state.nav.origin
export const selectDestination = state => state.nav.selectDestination
export const selectTravelTimeInfo = state => state.nav.selectTravelTimeInfo

export default navSlice.reducer