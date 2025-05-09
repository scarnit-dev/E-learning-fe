'use client';
import axios from 'axios';
import { authFailed, authStart, authSuccess } from './authSlice';

const authUser = async (user, dispatch, type) => {
  dispatch(authStart());
  try {
    const res = await axios.post(`/v1/auth/${type}`, user);
    dispatch(authSuccess(res.data));
    return res;
    // window.location.reload();
  } catch (error) {
    dispatch(authFailed());
    return error.response;
  }
};
const googleLogin = async (token, dispatch) => {
  dispatch(authStart());
  try {
    const res = await axios.get(`/v1/auth/google`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // window.location.reload();
    dispatch(authSuccess(res.data));
  } catch (error) {
    dispatch(authFailed());
  }
};
const logOut = async (dispatch, token, axiosJWT)=>{
    dispatch(authStart())
    try {
        await axiosJWT.post(`/v1/auth/logout`,{},{
            headers: {token: `Bearer ${token}`}
        }); 
        dispatch(authSuccess(null));
    } catch (error) {
        console.log(error)
        dispatch(authFailed());
    }
}

export { authUser, googleLogin, logOut };
