import { createAction, props } from '@ngrx/store';
import { UserInfo } from '../../models/data.model';

export const loadUser = createAction('[User] Load User', props<{ user: UserInfo }>());
export const loadUserSuccess = createAction('[User] Load User Success');
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: any }>());
export const resetUser = createAction('[User] Reset User');
