import { Component } from 'react';
import css from './ColorPicker.module.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(css);
class ColorPicker extends Component {
  state = {
    activeIndex: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeIndex: index });
  };

  makeOptionclassName = index => {
    /*     const optionClasses = [css.ColorPickerOption];
    if (index === this.state.activeIndex) {
      optionClasses.push(css.ColorPickerOptionActive);
    }
    return optionClasses.join(' '); */
  };

  render() {
    const { option } = this.props;
    const { activeIndex } = this.state;
    const { label } = option[activeIndex];
    const { color } = option[activeIndex];
    return (
      <div className={css.ColorPicker}>
        <h2 className={css.ColorPickerTitle}>So Color Picker</h2>
        <p className={css.ColorPickerText}>
          Color: <span style={{ color: color }}>{label}</span>
        </p>
        <div>
          {option.map(({ label, color }, index) => (
            <button
              key={label}
              className={cx({
                ColorPickerOption: true,
                ColorPickerOptionActive: index === this.state.activeIndex,
              })}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
