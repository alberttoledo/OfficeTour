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
    }
  }

  componentWillMount() {
  }

  render() {
    return (
      <View>
        <Pano
          source={{layout: 'SPHERE', ...asset('lounge.jpg')}}
        />
        <VrButton
          style={{
            width: 0.7,
            backgroundColor: 'blue',
            transform: [{translate: [-0.3, 0.5, -2]}],
          }}
          onClick={() => {console.log('Button Clicked')}}
        >
          <Text>Hello World!</Text>
        </VrButton>
        <InfoCard
          imageName={'historical.png'}
          description={'Historical Dash'}
        />
        <InfoCard
          imageName={'marti.png'}
          description={'Seagull'}
        />
      </View>
    );
  }
};
