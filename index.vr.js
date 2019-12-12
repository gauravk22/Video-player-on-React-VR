import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Model,
  Animated,
  Video,
  Sound,
  StyleSheet,
  CylindricalPanel,
  Image,
  Box
} from 'react-vr';

import VideoList from './Components/VideoList';
import VideoPlayerLayout from './Components/VideoPlayerLayout'

export default class video_library extends React.Component {
constructor(props){
  super(props)
  this.state={
    enabled:true
  }

  this.click=this.click.bind(this);
  this.close=this.close.bind(this);
}

click(){
  this.setState({
    enabled:false
  })
}

close(){
  this.setState({
    enabled:true
  })
}

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        {this.state.enabled?
        <CylindricalPanel layer={{width:800,height: 720}} >
		
          <VideoList click={this.click}/>
         
        </CylindricalPanel>
        :
        <VideoPlayerLayout click={this.close}/>
        }

        
        {/* <View style={{
          transform:[{translate:[0,0,-5]}],layoutOrigin:[0.5,0.5]
        }}>
        <Box dimWidth={2} dimdepth={1} dimHeight={2} lit/>
        </View> */}
        

      </View>
    );
  }
};

AppRegistry.registerComponent('video_library', () => video_library);
