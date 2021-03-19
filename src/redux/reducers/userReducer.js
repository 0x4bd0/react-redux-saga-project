import * as actionType from '../actionTypes/index';

const initState = [];
const userReducer = (state = initState, action) => {
	switch (action) {
		case actionType.GET_USERS:
			return {
				...state,
				users: action.payload,
			};
		default:
			returnstate;
	}
};
export default userReducer;
