import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserFailure, resetUser } from '../actions';
import { UserInfo } from '../../models/data.model';

export interface UserState {
  user: UserInfo | null;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  user: null,
  loading: false,
  error: null
};

export const userReducer = createReducer(
  userInitialState,
  on(loadUser, (state, {user}) => ({...state, user: {...user}, loading: true})),
  on(loadUserSuccess, (state) => ({...state, loading: false})),
  on(loadUserFailure, (state, {error}) => ({...state, error: {...error}, loading: false})),
  on(resetUser, (state) => ({...state, user: null, loading: false, error: null}))
);
