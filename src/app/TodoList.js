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

	inputRef = undefined;

	addItem = () => {
		if (this.inputRef.value !== "")
		{
			this.props.onSubmit({id: 0, description: this.inputRef.value, done: false});
			this.inputRef.value = "";
		}
	}

	onKeyDown = (event) => {
		if (event.key === 'Enter')
			this.addItem();
	}

	render() {
		return (
			<InputGroup size={this.props.size}>
				<Input placeholder="What needs to be done ?" onKeyDown={this.onKeyDown} ref="input" getRef={input => {this.inputRef = input}} />
				<InputGroupButton>
					<Button
						outline={this.props.outline}
						color={this.props.color}
						onClick={this.addItem}
					>
						Submit
					</Button>
				</InputGroupButton>
			</InputGroup>
		);
	}
}

class TodoListItem extends Component {

	state = {
		done: this.props.done
	}

	onClick = () => {
		this.props.onClick({id: this.props.id, description: this.props.children, done: !this.state.done});
		if (this.state.done === true)
			this.setState({done: false});
		else if (this.state.done === false)
			this.setState({done: true});
	}

	render() {
		if (this.state.done === true)
			return (
				<ListGroupItem action id={this.props.id} onClick={this.onClick}>
					<strike>{this.props.children}</strike>
				</ListGroupItem>
			);
		return (
			<ListGroupItem action id={this.props.id} onClick={this.onClick}>
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
						this.props.items.slice().reverse().map(
							(value, key, array) => {
								return (
									<TodoListItem key={key - array.length} id={value.id} done={value.done} onClick={this.props.onClick}>
										{value.description}
									</TodoListItem>
								);
							}
						)
					}
				</ListGroup>
			</div>
		)
	}
}

export {TodoList, TodoListItem, TodoListForm};