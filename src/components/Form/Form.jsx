import { Component } from 'react';
import shortid from 'shortid';
import css from './form.module.css';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    exsperience: 'junior',
    licence: false,
  };

  nameId = shortid.generate();
  tagId = shortid.generate();

  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };
  onSubmitInput = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  onChangeLicence = e => {
    this.setState({
      licence: e.currentTarget.checked,
    });
  };
  render() {
    return (
      <form
        className={css.form}
        htmlFor={this.nameId}
        onSubmit={this.onSubmitInput}
      >
        <label className={css.label}>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChangeInput}
            id={this.nameId}
          ></input>
        </label>
        <label className={css.label}>
          Family:
          <input
            className={css.input}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.onChangeInput}
            id={this.nameId}
          ></input>
        </label>
        <p>You rang:</p>
        <div className={css.radio}>
          <label>
            <input
              type="radio"
              name="exsperience"
              value="junior"
              onChange={this.onChangeInput}
              checked={this.state.exsperience === 'junior'}
            />
            junior
          </label>
          <label>
            <input
              type="radio"
              name="exsperience"
              value="middle"
              onChange={this.onChangeInput}
              checked={this.state.exsperience === 'middle'}
            />
            middle
          </label>
          <label>
            <input
              type="radio"
              name="exsperience"
              value="senior"
              onChange={this.onChangeInput}
              checked={this.state.exsperience === 'senior'}
            />
            senior
          </label>
        </div>
        <label>
          {' '}
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.onChangeLicence}
          />
          I agree
        </label>
        <button
          className={css.btn}
          type="submit"
          disabled={!this.state.licence}
        >
          {' '}
          Done
        </button>
      </form>
    );
  }
}

export default Form;
