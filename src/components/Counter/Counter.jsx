import css from './Counter.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Control } from './control';
import Value from './Value';

export class Counter extends Component {
  static defaultProps = {
    value: 0,
  };
  state = {
    value: this.props.value,
  };

  static propTypes = {
    value: PropTypes.number.isRequired,
  };
  onClickIncrement = () => {
    this.setState(prev => ({ value: prev.value + 1 }));
  };
  onClickDecrement = () => {
    this.setState(prev => ({
      value: prev.value - 1,
    }));
  };

  render() {
    return (
      <div className={css['qty']}>
        <Value value={this.state.value} />
        <Control
          onClickDecrement={this.onClickDecrement}
          onClickIncrement={this.onClickIncrement}
        />
      </div>
    );
  }
}
