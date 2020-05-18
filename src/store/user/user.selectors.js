import { createSelector } from 'reselect';

const selectUserState = state => state.user;

export const getCurrentUser = createSelector(
    [selectUserState],
    user => user.currentUser
)