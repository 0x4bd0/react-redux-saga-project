import { all } from 'react-dom';
import usersSaga from './userSaga';
export default function* rootSaga() {
	yield all([usersSaga()]);
}
