import { Counter } from './Counter/Counter.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList/TodoList.jsx';
//import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import color_picker from 'data/color_picker.json';
import { Component } from 'react';

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo1', completed: true },
      { id: 'id-2', text: 'Todo2', completed: true },
      { id: 'id-3', text: 'Todo3', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <>
        <TodoList todos={todos} onDelelteTodo={this.deleteTodo} />
        <div>
          <p> All: {todos.length}</p>
          <p>Deleted: {completedTodos} </p>
        </div>
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
