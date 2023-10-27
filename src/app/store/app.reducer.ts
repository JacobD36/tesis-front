import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  user: reducers.UserState;
  section: reducers.SectionState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: reducers.userReducer,
  section: reducers.sectionReducer
}
