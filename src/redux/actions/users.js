import * as actionType from '../actionTypes/index';

export const getUsers = (users) => {
    return {
        type: actionType.GET_USERS,
        payload: users,
    }
}