import { Container } from 'react-bootstrap';
import './App.css';
import UsersComponent from './comps/UsersComponent';

function App() {
	return (
		<div className='App'>
			<Container>
				<UsersComponent></UsersComponent>
			</Container>
		</div>
	);
}

export default App;
