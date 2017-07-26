// 
// This source code was auto-generated by bobflux-gen, Version=0.15.0.
// Don't modify this file but re-generate it by bobflux-gen.
// Bobflux-gen - https://www.npmjs.com/package/bobflux-gen
//

import * as s from './userAccountPageStates';
import * as f from '../flux';

export * from './userAccountPageStates';

export const rootKey = 'userAccount';

export const rootCursor: f.ICursor<s.IUserAccountPageState> = {
    key: rootKey
};

export default rootCursor;

export const isEditingEnabledCursor: f.ICursor<boolean> = {
    key: rootKey + '.isEditingEnabled'
};

export const editedUserInfoCursor: f.ICursor<s.IUserInfo | null> = {
    key: rootKey + '.editedUserInfo'
};

export const editedUserInfoEmailCursor: f.ICursor<string> = {
    key: rootKey + '.editedUserInfo.email'
};

export const editedUserInfoNameCursor: f.ICursor<string> = {
    key: rootKey + '.editedUserInfo.name'
};

export const editedUserInfoSurNameCursor: f.ICursor<string> = {
    key: rootKey + '.editedUserInfo.surName'
};
