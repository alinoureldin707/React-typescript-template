import { createSlice } from "@reduxjs/toolkit";

export type UserData = {
    [prop: string] : string
}

const initialState: {
    userData: UserData,
    isAuthenticated: boolean,
    token: string | null,
    loading: boolean,
    error: string
} = {
    userData: {},
    isAuthenticated: false,
    token: null,
    loading: false,
    error: ''
}

const UserSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        fetchUserRequest(state){
            state.loading = true
        },

        fetchUserData(state, action: {
            payload : UserData,
            type: string
        }){
            state.userData = action.payload;
            state.loading = false;
            state.error = '';
        },

        fetchUserFail(state, action : {
            payload: string,
            type: string
        }){
            state.error = action.payload;
            state.loading = false
        }
    }
})

export const UserActions = UserSlice.actions;
export default UserSlice;