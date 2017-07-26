// 
// This source code was auto-generated by bobflux-gen, Version=0.15.0.
// Don't modify this file but re-generate it by bobflux-gen.
// Bobflux-gen - https://www.npmjs.com/package/bobflux-gen
//

import * as s from './state';
import * as f from '../flux';

export * from './state';

export const rootKey = 'todos';

export const rootCursor: f.ICursor<s.ITodosState> = {
    key: rootKey
};

export default rootCursor;

export const editedTodoCursor: f.ICursor<s.ITodo> = {
    key: rootKey + '.editedTodo'
};

export const todosCursor: f.ICursor<s.ITodo[]> = {
    key: rootKey + '.todos'
};

export const editedTodoIdCursor: f.ICursor<number> = {
    key: rootKey + '.editedTodo.id'
};

export const editedTodoIsDoneCursor: f.ICursor<boolean> = {
    key: rootKey + '.editedTodo.isDone'
};

export const editedTodoNameCursor: f.ICursor<string> = {
    key: rootKey + '.editedTodo.name'
};
