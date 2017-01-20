import React, {Component} from 'react';
import {
	ListGroup,
	ListGroupItem,
	InputGroup,
	Input,
	Button,
	InputGroupButton
} from 'reactstrap';

class TodoListForm extends Component {
	render() {
		return (
			<InputGroup size={this.props.size}>
				<Input placeholder="What needs to be done ?"/>
				<InputGroupButton>
					<Button
						outline={this.props.outline}
						color={this.props.color}
					>
						Submit
					</Button>
				</InputGroupButton>
			</InputGroup>
		);
	}
}

class TodoListItem extends Component {
	render (){
		return (
			<ListGroupItem>
				{this.props.children}
			</ListGroupItem>
		);
	}
}

class TodoList extends Component {
	render (){
		return (
			<div className="TodoList">
				<ListGroup>				
					{
						this.props.items.map(
							(value, key) => <TodoListItem key={key}>{value}</TodoListItem>
						)
					}
				</ListGroup>
			</div>
		)
	}
}

export default TodoList;
export {TodoList, TodoListItem, TodoListForm};