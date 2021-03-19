import * as actionType from '../actionTypes/index';
import userReducer from '../reducers/userReducer';

const userActions = (users) => ({
	type: actionType.GET_USERS,
	payload: users,
});

export default userReducer;
