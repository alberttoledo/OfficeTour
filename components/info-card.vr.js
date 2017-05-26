import React from 'react';
import {
  asset,
  View,
  Image,
  Text,
} from 'react-vr';

export default class InfoCard extends React.Component {
  render() {
    const { currentTime, exitOn, enterOn } = this.props;
    const shouldRender = (currentTime < exitOn && currentTime > enterOn);

    if (!shouldRender) {
      return null;
    }

    return (
      <View
        onEnter={() => {this.props.pauseVideo()}}
        onExit={this.props.playVideo}
        style={{
          transform: [
            {translate: [90, -100, 680]},
            {rotateY: -180},
          ],
          layoutOrigin: [0.4, 0.7],
          width: 220,
          height: 200,
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        <Image
          style={{
            width: 200,
            height: 100,
            position: 'absolute',
          }}
          source={asset(`../static_assets/${this.props.imageName}`)}
        />
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            position: 'relative',
            marginTop: 100,
          }}
        >
        {this.props.description}
        </Text>
      </View>
    );
  }
};
