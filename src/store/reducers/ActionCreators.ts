import { userSlice } from './UserSlice';
import { IUser } from './../../types/User';
import axios from "axios";
import { AppDispatch } from "../store";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching())
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    dispatch(userSlice.actions.usersFetchingSuccess(response.data))

  } catch (error: any) {
    dispatch(userSlice.actions.usersFetchingError(error.message))
  }
}