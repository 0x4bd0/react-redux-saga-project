import * as sagaType from '../sagas/sagaType';

const initState = {
	users: [],
	error: null,
	loading: false,
};
const userReducer = (state = initState, action) => {
	switch (action.type) {
		case sagaType.REQUESTED_GET_USERS:
			return {
				...state,
				loading: true,
			};
		case sagaType.GET_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.users,
			};
		case sagaType.GET_USERS_FAIL:
			return {
				...state,
				loading: false,
				error : action.message
			};
		default:
			return state;
	}
};
export default userReducer;
