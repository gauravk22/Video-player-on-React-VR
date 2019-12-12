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

import VideoTile from './VideoTile'

import { Easing } from 'react-native';

import VideoPlayerLayout from './VideoPlayerLayout'


export default class VideoList extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            img:[],
            slideLeft: new Animated.Value(-1), 
            fadeIn: new Animated.Value(0),
            
        }
        
       
    }

    componentDidMount(){

        //api url https://api.themoviedb.org/3/movie/top_rated?api_key=de67d2e56e3db35cd600d1a90ca31940&language=en-US&page=1
//get url of jpg from above and then fetch image from http://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg


        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=de67d2e56e3db35cd600d1a90ca31940&language=en-US&page=1")
                .then(result=>result.json())
                .then(data=>{
                    let images=data.results.map((u,index)=>{
                       
                        return (
                            
                        //     <View key={index} style={{
                            
                        //     borderWidth: this.state.borderwidth,
                        //     borderColor: "#A482DF",
                        //     borderStyle: "solid",
                        //     padding:20,
                            
                            
                        //    }}>
                        //         <VrButton onClick={()=>{this.handleClick(index)}}>
                                    
                        //             <Image style={{
                                        
                        //                 width: 100,
                        //                 height:100,}} key={index} source={{uri:u.picture.thumbnail}}>
                        //             </Image>
                                    
                        //         </VrButton>
                         
                        // </View>
                       
                            <VideoTile key={index} url={`http://image.tmdb.org/t/p/w500/${u.poster_path}`} click={this.props.click}/>

                        );
                    })
                    
                    return this.setState({img:images})
                })

                Animated.sequence([
                    Animated.parallel([
                      Animated.timing(
                        this.state.slideLeft,
                        {
                         toValue: 0,
                         duration: 2000,
                         easing: Easing.ease
                        }
                      ),
                      Animated.timing(
                        this.state.fadeIn,
                        {
                         toValue: 1,
                         duration: 2000,
                         easing: Easing.ease
                        }
                      )
                    ])
                  ]).start();


    }

    
    render(){
        
        
        return(
            <Animated.View style={{
               
                flex:1,
                flexDirection: 'row',
                flexWrap:'wrap',
                alignItems: 'center',               //Align-items property will always align content along Cross Axis.
           
                justifyContent: 'space-between',    //Justify-content property will always align content along Main Axis.
                // backgroundColor:'white',
                width:800,
                height: 720,
                opacity: this.state.fadeIn,
                transform: [
                    {translateX: this.state.slideLeft},
                    {translateZ: -3}
                  ],
                  
            }} >

              {this.state.img}

              
            </Animated.View>

        )
    }
}