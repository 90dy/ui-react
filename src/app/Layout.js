import React, {Component} from 'react';
import {Container, Jumbotron} from 'reactstrap';
import axios from 'axios';
import $ from 'jquery';

import {TodoList, TodoListForm} from './TodoList';

class Layout extends Component {

	state = {
		items: []
	}

	componentDidMount() {
		this.getItem();
	}

	getItem = () => {
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

	addItem = (item) => {
		let array = [...this.state.items];
		let tmp = array[array.length - 1];
		
		if (tmp !== undefined)
			item.id = tmp.id;

		array.push(item);
		this.setState({items: array});
		axios
			.post(
				'http://localhost:3001/api/todolist', {
					Id: item.id,
					Description: item.description,
					Done: item.done
				}
			)
			.then((res) => {console.log(res)})
			.catch((err) => {console.error(err)});
	}

	setItem = (item) => {
		let array = [...this.state.items];

		array.map((i) => {
			if (i.id === item.id)
				return (item)
			return (i);
		});
		this.setState({items: array});
		axios
			.put(
				'http://localhost:3001/api/todolist/' + item.id, {
					Id: item.id,
					Description: item.description,
					Done: item.done
				}
			)
			.then((res) => {console.log(res)})
			.catch((err) => {console.error(err)});
	}

	render() {
		return (
			<div className="Layout">
				<Jumbotron>
					<Container>
						<TodoListForm size="lg" color="primary" onSubmit={this.addItem} />
					</Container>
				</Jumbotron>
				<Container>
					<TodoList items={this.state.items} onClick={this.setItem} />
				</Container>
				<br />
			</div>
		);
	}
}

export default Layout;