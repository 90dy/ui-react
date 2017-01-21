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

		this._input = undefined;
	}

	addItem() {
		console.log(this.refs.input);
		if (this._input.value !== "")
		{
			this.props.submit({description: this._input.value, done: false});
			this._input.value = "";
		}
	}

	onKeyDown(event) {
		if (event.key === 'Enter')
			this.addItem();
	}

	render() {
		return (
			<InputGroup size={this.props.size}>
				<Input placeholder="What needs to be done ?" onKeyDown={this.onKeyDown.bind(this)} ref="input" getRef={input => {this._input = input}} />
				<InputGroupButton>
					<Button
						outline={this.props.outline}
						color={this.props.color}
						onClick={this.addItem.bind(this)}
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
	}

	onClickDone() {
		this.setState({done: true});
	}

	onClickUndone() {
		this.setState({done: false});
	}
	
	renderChild() {
			if (this.state.done === true)
				return (<strike>{this.props.children}</strike>);
			return (this.props.children);
	}

	render() {
		return (
			<ListGroupItem active={this.props.done} action onClick={this.onClickUndone.bind(this)}>
					{this.renderChild()}
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