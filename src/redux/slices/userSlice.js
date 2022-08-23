import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    password:'',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ACTION_UPDATE_USER: (state,action) => {
            console.log(action);
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.password = action.payload.password;
        }
    },
})

export const { ACTION_UPDATE_USER } = userSlice.actions

export default userSlice.reducer