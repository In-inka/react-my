import { Component } from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toogle = () => {
    this.setState(prev => ({
      visible: !prev.visible,
    }));
  };

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={this.toogle}
          onMouseOver={this.toogle}
        >
          {this.state.visible ? 'Close' : 'Open'}{' '}
        </button>
        {this.state.visible && (
          <div style={{ width: '100px', background: '#fff' }}>Hello Inna</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
