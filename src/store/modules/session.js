import {REHYDRATE} from 'redux-persist';

export const UPDATE_SESSION_STORE = 'UPDATE_SESSION_STORE';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_USER_DATA = 'GET_USER_DATA';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const LOGOUT = 'LOGOUT';


const defaultState = {
  token: null,
  status: null,

};

export default function sessionReducer(state = defaultState, action) {
  switch (action.type) {
    case REHYDRATE:

      return {
        ...state,
        token: null,
        status: null,
      };
    
    default:
      return state;
  }
}

// action creators
export const updateSessionStoreAction = payload => ({
  type: UPDATE_SESSION_STORE,
  payload,
});

export const loginAction = (phone, password, productId, eventId) => ({
  type: LOGIN,
  phone,
  password,
  productId,
  eventId
});

export const signupAction = ({
  phone,
  password,
  confirmPassword,
  presenterNumber,
}) => ({
  type: SIGNUP,
  payload: {phone, password, confirmPassword, presenterNumber},
});

export const loginSuccessAction = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const getUserDataAction = payload => ({
  type: GET_USER_DATA,
  payload,
});

export const updateUserDataAction = payload => ({
  type: UPDATE_USER_DATA,
  payload,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
