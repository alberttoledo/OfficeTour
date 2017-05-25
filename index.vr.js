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

export default class OfficeTour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({
        autoPlay: true,
        muted: true,
        currentTime: 0,
      }),
    }
  }

  componentDidMount() {
    this.state.playerState.onTimeUpdate = (e) => {
      console.log('a', e.nativeEvent.currentTime);
      this.setCurrentTimeState(e.nativeEvent.currentTime);
    };
  }

  setCurrentTimeState(time) {
    this.setState({
      ...this.state,
      currentTime: time,
    });
  }

  videoTimeChange(event) {
    console.log('time change event: ', event);
  }

  render() {
    return (
      <View>
        <VideoPano
          loop={true}
          source={{layout: 'SPHERE', ...asset('video.mp4')}}
          playerState={this.state.playerState}
        />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -8]}],
          }}>
          Hello Virtual World!
        </Text>
        <VrButton
          style={{
            width: 0.7,
            backgroundColor: 'blue',
            transform: [{translate: [-0.3, 0.5, -2]}],
          }}
        >
          <Text>{this.state.currentTime}</Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('OfficeTour', () => OfficeTour);
