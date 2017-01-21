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
	constructor(props) {
		super(props);

		this.inputRef = undefined;
		this.addItem = this.addItem.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	addItem() {
		console.log(this.refs.input);
		if (this.inputRef.value !== "")
		{
			this.props.submit({description: this.inputRef.value, done: false});
			this.inputRef.value = "";
		}
	}

	onKeyDown(event) {
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
	constructor(props) {
		super(props);

		this.state = {done: props.done};
		this.done = this.done.bind(this);
		this.undone = this.undone.bind(this);
	}

	done() {
		this.setState({done: true});
	}

	undone() {
		this.setState({done: false});
	}

	render() {
		if (this.state.done === true)
			return (
				<ListGroupItem active action onClick={this.undone}>
						<strike>{this.props.children}</strike>
				</ListGroupItem>
			);
		return (
				<ListGroupItem action onClick={this.done}>
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
									<TodoListItem key={key - array.length} done={value.done}>
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