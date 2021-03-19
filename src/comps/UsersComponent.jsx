import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import UserCard from './UserCard';

const UsersComponent = () => {
	const dispatch = useDispatch();
    const { users, error, loading } = useSelector((state) => state.users);
    
	useEffect(() => {
		dispatch(getUsers());
	}, []);

    return (
			<>
				{loading && <p className='loading'>Loading ...</p>}
				{users.length > 0 && users.map((item) => UserCard(item))}
				{error && <p className='error'>{error}</p>}
			</>
		);
    };

export default UsersComponent;
