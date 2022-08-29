import { LOGIN_ACTION_SUCCESS, LOGOUT_ACTION_SUCCESS } from './actions/auth';

export const INITAL_STATE = {
  isLogin: false,
  user: undefined,
};

const authReducer = (state = INITAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_ACTION_SUCCESS:
      return { ...state, isLogin: true, user: payload };
    case LOGOUT_ACTION_SUCCESS:
      return { ...state, isLogin: false, user: undefined };
    default:
      return state;
  }
};

export default authReducer;
