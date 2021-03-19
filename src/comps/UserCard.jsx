import { Card, Button } from 'react-bootstrap';

const UserCard = (user) => {
	return (
		<Card style={{ width: '18rem' }} key={user.id}>
			<Card.Img variant='top' src='holder.js/100px180' />
			<Card.Body>
				<Card.Title>{user.name}</Card.Title>
				<Card.Text>{user.username}</Card.Text>
				<Card.Text>{user.phone}</Card.Text>
				<Card.Text>{user.email}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default UserCard;
