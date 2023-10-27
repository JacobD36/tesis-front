import { createReducer, on } from '@ngrx/store';
import { setCount, addData } from '../actions';

export interface SectionState {
  id: number;
  count: number;
  data: {
    num: number,
    value: number
  }[];
}

export const sectionInitialState: SectionState = {
  id: 1,
  count: 0,
  data: []
};

export const sectionReducer = createReducer(
  sectionInitialState,
  on(setCount, (state , {id, count}) => ({...state, id: id, count: count + 1})),
  on(addData, (state, { newData }) => ({...state, data: [...state.data, ...newData]}))
);
