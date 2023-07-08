import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled.jsx';

import ReactLoading from 'react-loading';

const Example = () => (
  <ReactLoading type={'bubbles'} color={'blue'} height={100} width={90} />
);

class Player extends Component {
  state = {
    isVideoLoader: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        isVideoLoader: false,
      });
    }
  }

  render() {
    const { isVideoLoader } = this.state;
    const { url } = this.props;
    const playerSize = isVideoLoader ? '100%' : 0;

    return (
      <>
        {url && !isVideoLoader && (
          <div>
            <Example />
          </div>
        )}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              onReady={() => this.setState({ isVideoLoader: true })}
              width={playerSize}
              height={playerSize}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;