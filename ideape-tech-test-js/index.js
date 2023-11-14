class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { is_done: false };
	}

	handleClick = () => {
		this.setState({ is_done: !this.state.is_done });
	}

	render() {
		return (
			<li onClick={this.handleClick} style={{ 'textDecoration': this.state.is_done ? 'line-through' : 'none', 'cursor': 'pointer' }} >
				{this.props.task}
			</li>
		);
	}
}

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			to_do_list: ['Finish this test', 'Get hired', 'Change the world'],
			newTask: ''
		};
	}

	render() {
		return (
			<div>
				<h2>Add a new task to your to-do list</h2>
				<input type="text"
					value={this.state.newTask}
					onChange={this.handleTaskChange} />
				<button onClick={this.handleAdd}>Add</button>
				<ul>
					{this.state.to_do_list.map((task_text) =>
						<ToDoItem task={task_text} key={Math.random() * 1000} />
					)}
				</ul>
			</div>
		);
	}

	handleTaskChange = (event) => {
		this.setState({ newTask: event.target.value });
	};


	handleAdd = () => {
		this.setState({ to_do_list: [...this.state.to_do_list, this.state.newTask] })
	}
}

ReactDOM.render(
	<ToDoList />,
	document.getElementById('root')
);