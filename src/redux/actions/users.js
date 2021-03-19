import * as sagaType from '../sagas/sagaType';

export const getUsers = (users) => {
	return {
		type: sagaType.REQUESTED_GET_USERS,
		payload: users,
	};
};
