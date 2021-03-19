import { put, call, takeEvery } from 'redux-saga/effects'

const URL = 'https://jsonplaceholder.typicode.com/users';
const options = {
	method: 'GET',
	'content-Type': 'application/json',
};

const getUsersApi = async () => {
	try {
		let tmp = await fetch(URL);
		return tmp;
	} catch (err) {
		throw err;
	}
};

function* fetchUsers(action) {
    try {
        const users = yield call(await getUsersApi())
        yield put({
            type: 'GET_USERS_SUCCESS',
            users : users
        })
    } catch (err) {
        yield put({
            type: 'GET_USERS_FAIL',
            message : 'Fetching users failed.'
        })
    }
}

function* usersSaga() {
    yield takeEvery('REQUESTED_GET_USERS', fetchUsers)
}

export default usersSaga