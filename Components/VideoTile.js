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
  Image
} from 'react-vr';

import VideoPlayerLayout from './VideoPlayerLayout'

export default class VideoTile extends React.Component{
    constructor(props){
        super(props);

        this.state={
            borderwidth:0
        }

        this.handleClick=this.handleClick.bind(this);
        this.handleExit=this.handleExit.bind(this);
        this.click=this.click.bind(this);
    }

    handleClick(){
        console.log('clicked');



       this.setState({
           borderwidth:1
       })

       
    }

    handleExit(){
        this.setState({
            borderwidth:0
        })
    }

    click(){
       
    }

    render(){
        return(
            <View  style={{
                            
                borderWidth: this.state.borderwidth,
                borderColor: "blue",
                borderStyle: "solid",
                padding:20,
                
                
               }}>
                    <VrButton onClick={this.props.click} onEnter={this.handleClick} onExit={this.handleExit}> 
                        
                        <Image style={{
                            
                            width: 100,
                            height:100,}} source={{uri:this.props.url}}>
                        </Image>
                        
                    </VrButton>
             
            </View>
        )
    }

}


