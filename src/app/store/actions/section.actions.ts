import { createAction, props } from '@ngrx/store';
import { DataSend } from 'src/app/models/data.model';

export const setCount = createAction('[Section] Go Next Question', props<{ id: number, count: number }>());
export const addData = createAction('[Section] Set Data', props<{ newData: DataSend[] }>());
