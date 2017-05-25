import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  VideoPano,
  Text,
  View,
  MediaPlayerState,
  VrButton,
} from 'react-vr';

import InfoCard from './info-card';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({
        autoPlay: true,
        muted: false,
        currentTime: 0,
        playing: true,
      }),
    }
  }

  componentWillMount() {
    this.state.playerState.onTimeUpdate = (e) => {
      this.setCurrentTimeState(e.nativeEvent.currentTime);
    };
  }

  pauseVideo = () => {
    this.state.playerState.pause();
    this.setState({
      playing: false,
    });
  }

  playVideo = () => {
    this.state.playerState.play();
    this.setState({
      playing: true,
    });
  }

  setCurrentTimeState(time) {
    this.setState({
      ...this.state,
      currentTime: time,
    });
  }

  render() {
    return (
      <View>
        <VideoPano
          loop={true}
          source={{layout: 'SPHERE', ...asset('walking.mp4')}}
          playerState={this.state.playerState}
          volume={0.1}
        />
        <VrButton
          style={{
            width: 0.7,
            backgroundColor: 'blue',
            transform: [{translate: [-0.3, 0.5, -2]}],
          }}
          onClick={this.state.playing ? this.pauseVideo : this.playVideo}
        >
          <Text>{this.state.currentTime}</Text>
        </VrButton>
        <InfoCard
          currentTime={this.state.currentTime}
          playVideo={this.playVideo}
          pauseVideo={this.pauseVideo}
          exitOn={10}
          enterOn={5}
          imageName={'historical.png'}
          description={'Historical Dash'}
        />
        <InfoCard
          currentTime={this.state.currentTime}
          playVideo={this.playVideo}
          pauseVideo={this.pauseVideo}
          exitOn={17}
          enterOn={12}
          imageName={'marti.png'}
          description={'Seagull'}
        />
      </View>
    );
  }
};
