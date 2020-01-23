import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import axios from "axios";

import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					title: "Müll leeren",
					completed: false
				},
				{
					id: 2,
					title: "Dinner mit Freunden",
					completed: true
				},
				{
					id: 3,
					title: "Meeting",
					completed: false
				}
			]
		};
	}

	// toggleCompleted = (e) => {
	// 	// console.log(this.state);
	// 	console.log(e.target.value);
	// };

	toggleCompleted = (id) => {
		// console.log(this.props);
		console.log(id);
		// this.state.todos[id-1].completed = !this.state.todos[id-1].completed;
		// console.log(this.state.todos[id-1].completed);
		// this.setState(this.state);
		// console.log(this.state);
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	}

	deleteTodo = (id) => {
		// console.log(id);
		this.setState( {todos: this.state.todos.filter((todo) =>  todo.id !== id)});
	}

	addTodo = (title) => {
		console.log(title);
		const newTodo = {
			id: 4,
			title: title,
			completed: false
		}

		// const newTodos = this.state.todos.concat(newTodo);
        // console.log(newTodos);
		// this.setState({ todos: newTodos});
		// this.setState({ todos: this.state.todos.concat(newTodo)});
		this.setState({ todos: [...this.state.todos, newTodo]});
		// console.log(this.state.todos);
	}


	render() {
		return (
			<div className="App">
				<h1>Todo Listen App</h1>
			</div>
		);
	}

	// render() {
	// 	console.log(this.state);
	// 	return (
	// 		<div className="App">
	// 			<Todos />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<Todos todos={this.state.todos} />
	// 			{/* <TodoItem /> */}
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<div className="container">
	// 			  <AddTodo addTodo={this.addTodo} />
	// 			  <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
	// 			</div>
	// 		</div>
	// 	);
	// }
}

/* class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((res) => this.setState({ todos: res.data }));
	}

	// Toggle Complete
	toggleCompleted = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	// Delete Todo
	deleteTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) =>
				this.setState({
					todos: [...this.state.todos.filter((todo) => todo.id !== id)]
				})
			);
	};

	// Add Todo
	addTodo = (title) => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false
			})
			.then((res) => {
				res.data.id = uuid.v4();
				this.setState({ todos: [...this.state.todos, res.data] });
			});
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />
						<Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										toggleCompleted={this.toggleCompleted}
										deleteTodo={this.deleteTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
} */

export default App;
