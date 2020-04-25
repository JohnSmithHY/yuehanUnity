import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity,
    ScrollView,
    Dimensions
 } from 'react-native';

class LKScroller extends Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }

    render(){
        return (
            <View style={styles.mainViewStyle}>
                <ScrollView horizontal = {true} pagingEnabled = {true}>
                    {this._renderItem()}
                </ScrollView>
            </View>
        )
    } 

    _renderItem() {
        let color = ['red','green','blue','yellow','purple','cyan'];
        let itemArr = [];
        for (let i = 0; i < color.length; i++) {
            const element = color[i];
            itemArr.push(
                <View style={{
                    width: Dimensions.get('window').width,
                    height: 300,
                    backgroundColor: color[i],
                    alignItems: "center",
                    justifyContent: 'center'
                }} 
                key = {i}
                >
                    <Text>{i}</Text>
                </View>
                
            );
        }
        return itemArr;
    }
 };

 const styles = StyleSheet.create({
     mainViewStyle: {
         flex: 1,
         backgroundColor: 'red'
     }
 });

 export default LKScroller;