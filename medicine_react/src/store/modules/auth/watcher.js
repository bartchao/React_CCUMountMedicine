import { takeLatest } from 'redux-saga/effects';
import { LOGIN_ACTION, LoginAction, LOGOUT_ACTION, LogoutAction } from './actions/auth';

const authWatcher = [
  takeLatest(LOGIN_ACTION, LoginAction),
  takeLatest(LOGOUT_ACTION, LogoutAction),
];
export default authWatcher;
