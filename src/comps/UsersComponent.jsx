import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/users';

const UsersComponent = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.users);
	console.log(state);

	useEffect(() => {
		dispatch(
			getUsers([
				{
					id: 1,
					name: 'zmar',
				},
			])
		);
	}, []);

	return <h1>Hello world</h1>;
};

export default UsersComponent;
