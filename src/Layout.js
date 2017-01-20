import React, {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';

import TodoList, {TodoListForm} from './TodoList';

class Layout extends Component {
	render() {
		return (
			<div className="Layout">
				<Jumbotron>
					<Container>
						<TodoListForm size="lg" color="primary" />
					</Container>
				</Jumbotron>
				<Container>
					<TodoList items={[
						"hello world !",
						"Salut !"
					]} />
				</Container>
			</div>
		);
	}
}

export default Layout;