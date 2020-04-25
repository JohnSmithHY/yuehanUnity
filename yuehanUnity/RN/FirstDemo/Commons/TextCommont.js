import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

class TextCommont extends Component {
     constructor() {
         super();
         this.state = {
             name: '料科学院',
             intro: '喜欢IT就来廖科',
             bodyText:'对酒当歌，人生几何！对酒当歌，人生几何！对酒当歌，人生几何！'
         }
     }
    render(){
        const {name, intro,bodyText} = this.state;
        return (
            <View>
                <Text style={[styles.mainTitle,styles.commonStyle]}> {name} </Text>
                <Text style={[styles.subTitle,styles.commonStyle]}> {intro} </Text>
                <View style={styles.viewStyle}>
                    <Text 
                        style={styles.bodyText}
                        numberOfLines={0}
                        ellipsizeMode='middle'
                        >{bodyText}</Text>
                </View>
            </View>
        )
    } 
 };

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 30,
        color: 'cyan',
    },

    subTitle: {
        fontSize: 20,
        color: '#fff',
    },
    
    commonStyle: {
        fontWeight: 'bold'
    },
    viewStyle: {
        backgroundColor: 'cyan',
        width: 200,
        height: 150
    },

    bodyText:{
        fontSize: 25,
        lineHeight:40
    }
})

 export default TextCommont;