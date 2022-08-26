import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    avatar:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    password:'',
    address:'',
    company:''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ACTION_UPDATE_USER: (state,action) => {
            console.log(action);
            state.avatar = action.payload.avatar;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.password = action.payload.password;
            state.address = action.payload.address;
            state.company = action.payload.company;
        }
    },
})

export const { ACTION_UPDATE_USER } = userSlice.actions

export default userSlice.reducer