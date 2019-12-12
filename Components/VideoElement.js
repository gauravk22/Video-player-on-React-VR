import React from 'react';
import {
  Video,
  View,
  asset,
  MediaPlayerState,
  VideoControl,
  VrButton,
  Image
} from 'react-vr';

class VideoElement extends React.Component {

constructor(props){
  super(props)

  this.state = {
    playerState: new MediaPlayerState({autoPlay: true, muted: true}),
  };

}

  render() {
    return (
      <View style={{  height: 4,flexDirection:'column',alignItems:'stretch'}}>
        
        <View><Video style={{height: 4}} source={asset('cricket.mp4')} playerState={this.state.playerState}/></View>
        
        <View style={{flexDirection:'row'}}>
        
            <View>
            <VideoControl
              style={{
                height: 0.2 ,
                width: 7.8,
              }}
              
              playerState={this.state.playerState}
            />
            </View>

            <View >
                <VrButton onClick={this.props.click}>
                <Image style={{width: 0.2,
                            height:0.2,}} source={asset('red_cross.png')}>

                </Image>
              </VrButton>
            </View>

        </View>
      
      </View>
    )
  }
}
module.exports = VideoElement;