import React, { Component } from 'react';
import { 
    View,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
    Dimensions,
    Alert
 } from 'react-native';

class ImgSRC extends Component {
     constructor() {
         super();
         this.state = {
             dataArr: require('./ImgSource.json')
         }
     }
    render(){
        const {name, intro,bodyText} = this.state;
        return (
            <View style={styles.contain}>
                {this._renderItem()}
            </View>
        )
    } 
    _renderItem(){
        let screenWidth = Dimensions.get('window').width;
        let cols = 3,boxWidth = 100,boxH = 120;
        let hMargin = (screenWidth - (boxWidth * cols))/(cols+1)
        var itemArr = [];
        let dataArr = this.state.dataArr;
        let vMargin = 20;
        for (let i = 0; i < dataArr.length; i++) {
            let {icon,name} = dataArr[i]
            let url = './Img/'+icon;
            itemArr.push(
                <View style={{
                    width: boxWidth,
                    alignItems: "center",
                    marginTop: vMargin,
                    marginLeft: hMargin,
                    backgroundColor:'cyan'
                }}>
                    <Image source={require('./Img/timg.png')} style={{width: boxWidth, height:boxH}}></Image>
                    <Text>name</Text>
                </View>
            )
        }
        return itemArr;
    }
 };

 const styles = StyleSheet.create({
     contain: {
         flex: 1,
         flexDirection: "row",
         flexWrap:'wrap'
     }
 });

 export default ImgSRC;