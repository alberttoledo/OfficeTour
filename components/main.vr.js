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
    this.rooms = [
      {
        name: 'batcave',

      }
    ];
    this.state = {
      room: 'batcave',
    };
  }

  componentWillMount() {
  }

  goToRoom = (room) => {
    console.log('room');
    this.setState({
      room: room,
    });
  }

  render() {
    return (
      <View>
        <Pano
          source={{layout: 'SPHERE', ...asset(`rooms/${this.state.room}.jpg`)}}
          style={{transform: [{translate: [0, 0, 0]}]}}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('lounge')}}
          currentRoom={this.state.room}
          ownerRoom={'batcave'}
          description={'Main Hall'}
          position={[10, 5, 0.5]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('batcave')}}
          currentRoom={this.state.room}
          ownerRoom={'lounge'}
          description={'Bat Cave'}
          position={[0, 3, 18]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('wayne')}}
          currentRoom={this.state.room}
          ownerRoom={'lounge'}
          description={'Wayne'}
          position={[-18, 5, 3]}
        />
        {/* <InfoCard
          onEnter={() => {console.log('in info card')}}
          imageName={'marti.png'}
          description={'Seagull'}
          position={[10, 2, 0]}
        /> */}
      </View>
    );
  }
};
