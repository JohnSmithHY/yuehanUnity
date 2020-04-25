import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity
 } from 'react-native';

class LKButton extends Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }

    _buttonClick() {
        Alert.alert('活动是否是否');
    }
    render(){
        return (
            <View>
                <Button title={'点击'}
                    onPress = {()=>this._buttonClick()}
                    color='red'
                ></Button>
                <TouchableOpacity 
                onPressIn={() => this._buttonClick()}
                activeOpacity={0.6}
                style={{
                    backgroundColor:'cyan',
                    width: 100,
                    height: 100
                }}
                >
                    <Text>注册账号</Text>
                </TouchableOpacity>
            </View>
        )
    } 
 };

 const styles = StyleSheet.create({

 });

 export default LKButton;