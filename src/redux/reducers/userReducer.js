import * as actionType from '../actionTypes/index';

const initState = [];
const userReducer = (state = initState, action) => {
		switch (action.type) {
			case actionType.GET_USERS:
				return action.payload;
			default:
				return state;
		}
};
export default userReducer;
