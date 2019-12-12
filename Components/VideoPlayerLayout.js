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
  Image,
  
} from 'react-vr';

import VideoElement from './VideoElement'

export default class VideoPlayerLayout extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
          rotateY:0
        }
        this.onNavigationClick=this.onNavigationClick.bind(this);
    }

    onNavigationClick(e){

      if (e.nativeEvent.inputEvent.eventType === "mousedown" && e.nativeEvent.inputEvent.button === 0) {
      console.log('onInput');
        this.setState({
          rotateY:180
        })
    }
    }
    
    render(){
        return(
            <View>
            
            <View style={{
              flex: 1,
              width: 8,
              flexDirection: 'column',
              alignItems: 'stretch',
              backgroundColor: '#333333',
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -5]}]
            }}>
            <VideoElement click={this.props.click}/>
            </View>

          <View style={{
              flex: 1,
              width: 2.5,
              flexDirection: 'column',
              alignItems: 'stretch',
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 4, -5]}],
              
            }}>
            <VrButton>
                <Text>
                    back to dashboard
                </Text>
            </VrButton>
            </View>

            {/* <View onInput={this.onNavigationClick} style={{layoutOrigin:[0.5,0.5]}}>
            <Model
                
                  source={{
                    obj: asset('constructor-worker.obj'),
                    mtl: asset('constructor-worker.mtl')
                  }}
                  style={{
                    transform: [
                      {translate: [9, -2, 5],},{scale:0.1},{rotateY:this.state.rotateY}
                    ]
                  }}
                />
            </View> */}

            
          </View>
        )
    }
}