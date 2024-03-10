import React from 'react';

class TodoList extends React.Component {
  state = {
    todos: [],
    newTodo: ''
  };

  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      this.setState({ todos: storedTodos });
    }
  }

  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleUpdate = (e, id) => {
    const updatedTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, text: e.target.value } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, { id: Date.now(), text: newTodo }];
      this.setState({ todos: updatedTodos, newTodo: '' });
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  };

  updateTodo = (id) => {
    const updatedTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo } : todo
    );
    this.setState({ todos: updatedTodos });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  render() {
    const { todos, newTodo } = this.state;
  
    return (
      <>
      <h1>TODO List</h1>
        <input type="text" value={newTodo} onChange={this.handleChange} /><br />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input type="text" value={todo.text} onChange={(e) => this.handleUpdate(e, todo.id)} />
              <button onClick={() => this.updateTodo(todo.id)}>Update</button>
              <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;