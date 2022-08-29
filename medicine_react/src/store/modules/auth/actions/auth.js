import { put } from 'redux-saga/effects';
import notifyAction from '../../../helpers/notifyAction';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGIN_ACTION_SUCCESS = `${LOGIN_ACTION}_SUCCESS`;
export const LOGIN_ACTION_FAILURE = `${LOGIN_ACTION}_FAILURE`;
export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const LOGOUT_ACTION_SUCCESS = `${LOGOUT_ACTION}_SUCCESS`;
export const LOGOUT_ACTION_FAILURE = `${LOGOUT_ACTION}_FAILURE`;

const LogoutNotifier = () => notifyAction({
  type: LOGOUT_ACTION,
  loader: true,
});
const LoginNotifier = (formValues) => notifyAction({
  type: LOGIN_ACTION,
  data: formValues,
  loader: true,
});
function* LoginAction(user) {
  yield put({ type: LOGIN_ACTION_SUCCESS, payload: user.data });
}
function* LogoutAction() {
  yield put({ type: LOGOUT_ACTION_SUCCESS });
}

export { LoginNotifier, LoginAction, LogoutAction, LogoutNotifier };
