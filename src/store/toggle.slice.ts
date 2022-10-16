import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store";

export interface toggleState {
    value: boolean
}

const initialState = {
    value: false,
} as toggleState

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        setToggle: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        },
    },
})

export const {setToggle} = toggleSlice.actions

export const selectToggle = (state: RootState) => state.toggle.value

export default toggleSlice.reducer
