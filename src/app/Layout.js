import React, {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';
import $ from 'jquery';

import {TodoList, TodoListForm} from './TodoList';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
		this.getItem = this.getItem.bind(this);
	}

	componentDidMount() {
		this.getItem();
	}

	getItem() {
		$(document).ready(() => {
			$.getJSON("http://localhost:3001/api/todolist", "Origin: http://localhost:3000/")
				.done((data) => {
					data = data.map((d) => {
						return {id: d.Id, description: d.Description, done: d.Done};
					});
					this.setState({
						items: data
					});
				})
				.fail((data, error) => {
					console.error(error);
				});
		});
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