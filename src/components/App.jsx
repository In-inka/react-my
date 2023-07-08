import { Counter } from './Counter/Counter.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList/TodoList.jsx';
import Form from './Form';
import TodoEdit from './TodoEdit';
import Filter from './TodoList/Filter.jsx';
import LoginForm from './LoginForm';
//import user from 'data/user.json';
import shortid from 'shortid';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import color_picker from 'data/color_picker.json';
import { Component } from 'react';
import initialTodos from 'data/initialTodos.json';

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: ' ',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  onSubmitForm = data => {
    console.log(data);
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ),
    }));
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getvisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
  };

  calculateCompleteTodo = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('app');
    const { filter } = this.state;

    const visibleTodos = this.getvisibleTodos();
    const calculateComplateCounte = this.calculateCompleteTodo();
    return (
      <>
        <LoginForm />
        <Form onSubmitForm={this.onSubmitForm} />
        <TodoEdit text={this.addTodo} />
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <TodoList
          todos={visibleTodos}
          onDelelteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
          complete={calculateComplateCounte}
        />
        <ColorPicker option={color_picker} />
        <Dropdown />
        <Counter value={1} />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />;
      </>
    );
  }
}
