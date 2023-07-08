import { Component } from 'react';
import css from './todoEdit.module.css';

class TodoEdit extends Component {
  state = {
    message: ' ',
  };

  onChsngeForm = e => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.text(this.state.message);
    this.setState({
      message: ' ',
    });
  };

  render() {
    return (
      <form className={css.todoEdit} onSubmit={this.onSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.onChsngeForm}
        ></textarea>
        <button className={css.btn} type="submit">
          {' '}
          Add
        </button>
      </form>
    );
  }
}

export default TodoEdit;
