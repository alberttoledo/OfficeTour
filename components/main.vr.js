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
      room: 'wayne',
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
          description={'Lounge'}
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
        <InfoCard
          onEnter={() => {this.goToRoom('mens')}}
          currentRoom={this.state.room}
          ownerRoom={'lounge'}
          description={'Men\'s Bathroom'}
          position={[-20, 10, -2]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('lounge')}}
          currentRoom={this.state.room}
          ownerRoom={'wayne'}
          description={'Lounge'}
          position={[10, 0, 5]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('noprivacy')}}
          currentRoom={this.state.room}
          ownerRoom={'lounge'}
          description={'New Corner'}
          position={[20, 7, -34]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('lounge')}}
          currentRoom={this.state.room}
          ownerRoom={'noprivacy'}
          description={'Lounge'}
          position={[15, -3, -7]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('danger')}}
          currentRoom={this.state.room}
          ownerRoom={'noprivacy'}
          description={'Danger'}
          position={[12, 0, 15]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('noprivacy')}}
          currentRoom={this.state.room}
          ownerRoom={'danger'}
          description={'New Corner'}
          position={[15, 5, 12]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('newlounge')}}
          currentRoom={this.state.room}
          ownerRoom={'lounge'}
          description={'New Lounge'}
          position={[15, 6, 10]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('iceberg')}}
          currentRoom={this.state.room}
          ownerRoom={'newlounge'}
          description={'Iceberg'}
          position={[-15, 2, 10]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('newlounge')}}
          currentRoom={this.state.room}
          ownerRoom={'iceberg'}
          description={'New Lounge'}
          position={[15, 3, -12]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('lounge')}}
          currentRoom={this.state.room}
          ownerRoom={'newlounge'}
          description={'Lounge'}
          position={[-30, 3, -12]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('batcave')}}
          currentRoom={this.state.room}
          ownerRoom={'newlounge'}
          description={'Batcave'}
          position={[-40, 3, -8]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('westside')}}
          currentRoom={this.state.room}
          ownerRoom={'newlounge'}
          description={'Westside'}
          position={[5, 10, 10]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('newlounge')}}
          currentRoom={this.state.room}
          ownerRoom={'westside'}
          description={'New Lounge'}
          position={[-25, 1, -2]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('stark')}}
          currentRoom={this.state.room}
          ownerRoom={'westside'}
          description={'Stark'}
          position={[12, 5, 10]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('westside')}}
          currentRoom={this.state.room}
          ownerRoom={'stark'}
          description={'Westside'}
          position={[6, 2, 13]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('hoj')}}
          currentRoom={this.state.room}
          ownerRoom={'westside'}
          description={'HOJ'}
          position={[20, 12, 5]}
        />
        <InfoCard
          onEnter={() => {this.goToRoom('westside')}}
          currentRoom={this.state.room}
          ownerRoom={'hoj'}
          description={'Westside'}
          position={[15, 7, -1]}
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
