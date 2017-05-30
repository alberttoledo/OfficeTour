import React from 'react';
import {
  asset,
  View,
  Image,
  Text,
} from 'react-vr';

export default class InfoCard extends React.Component {
  render() {
    // const { currentTime, exitOn, enterOn } = this.props;
    // const shouldRender = (currentTime < exitOn && currentTime > enterOn);
    //
    // if (currentTime && enterOn && exitOn) {
    //   if (!shouldRender) {
    //     return null;
    //   }
    // }

    if (this.props.currentRoom !== this.props.ownerRoom) {
      return null;
    }

    return (
      <View
        {...this.props}
        billboarding={'on'}
        style={{
          transform: [
            {translate: this.props.position},
            // {rotateY: -180},
          ],
          // layoutOrigin: [0.4, 0.7],
          width: 3.4,
          height: 2,
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        {/* <Image
          style={{
            width: 4,
            height: 2,
            position: 'absolute',
          }}
          source={asset(`../static_assets/${this.props.imageName}`)}
        /> */}
        <Text
          style={{
            fontSize: 0.8,
            color: 'black',
            marginTop: 0.5,
            position: 'relative'
          }}
        >
        {this.props.description}
        </Text>
      </View>
    );
  }
};
