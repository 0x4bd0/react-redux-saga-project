import { put, call, takeEvery } from 'redux-saga/effects'

const URL = 'https://jsonplaceholder.typicode.com/users';
const options = {
	method: 'GET',
	'content-Type': 'application/json',
};

const getUsersApi = () => {
	return fetch(URL)
		.then((data) => data.json())
		.catch((err) => err);
};

function* fetchUsers(action) {
    try {
        const users = yield call(getUsersApi)
        console.log(users)
        if (users.length > 0) {
            yield put({
            type: 'GET_USERS_SUCCESS',
            users : users
        })
        } else {
                    yield put({
            type: 'GET_USERS_FAIL',
            message : 'Fetching users failed.'
        })
        }

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