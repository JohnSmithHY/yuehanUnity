import React, { Component } from 'react';
import { 
    View,
    Image,
    StyleSheet,
    ImageBackground,
    Text
 } from 'react-native';

class LKImage extends Component {
     constructor() {
         super();
         this.state = {
         }
     }
    render(){
        const {name, intro,bodyText} = this.state;
        return (
            <View style= {{}} >
                {/* 引入本地图片组件 */}
                <ImageBackground source={require('./Img/timg.png')}
                style={{width:500, height:400}}>
                    <Text>{'小明'}</Text>
                     <Image source={require('./Img/timg.png')} style={{width:500,height:300}}>
                     </Image>
                </ImageBackground>
            </View>
        )
    } 
 };

const styles = StyleSheet.create({
})

 export default LKImage;