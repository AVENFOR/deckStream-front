import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface toggleState {
    value: boolean
}

const initialState: toggleState = {
    value: false,
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        setToggle: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const {setToggle} = toggleSlice.actions

export const select = (state) => state.toggle.value

export default toggleSlice.reducer
