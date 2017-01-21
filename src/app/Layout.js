import React, {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';

import {TodoList, TodoListForm} from './TodoList';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{description: "hello world !", done: true},
				{description: "Salut !", done: false},
				{description: "Salut !", done: false},
				{description: "Salut !", done: false},
				{description: "Salut !", done: false}
			]
		}
		this.addItem = this.addItem.bind(this);
	}

	addItem(item) {
		let array = this.state.items;

		array.push(item);
		this.setState({items: array});
	}

	render() {
		return (
			<div className="Layout">
				<Jumbotron>
					<Container>
						<TodoListForm size="lg" color="primary" submit={this.addItem} />
					</Container>
				</Jumbotron>
				<Container>
					<TodoList items={this.state.items} />
				</Container>
				<br />
			</div>
		);
	}
}

export default Layout;