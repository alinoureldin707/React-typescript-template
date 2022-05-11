import { Dispatch } from "redux";
import axios from "../../../axios";
import { UserActions, UserData } from "./UsersSlice";

export const getUser = () => async (dispatch: Dispatch) =>{
    try{
        dispatch(UserActions.fetchUserRequest())
        const response = await axios.get<UserData>('/user')
        const data = response.data;
        dispatch(UserActions.fetchUserData(data))
    }
    catch(error: any){
        dispatch(UserActions.fetchUserFail(error))
    }

}
