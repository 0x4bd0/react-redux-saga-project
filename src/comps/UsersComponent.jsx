import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import UserCard from './UserCard';

const UsersComponent = () => {
	const dispatch = useDispatch();
    const state = useSelector((state) => state.users);
    
	useEffect(() => {
		dispatch(
			getUsers([
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
				{
					id: 1,
					name: 'zmar',
				},
			])
		);
	}, []);

    return state.length > 0 && state.map((item) => UserCard(item));
    };

export default UsersComponent;
