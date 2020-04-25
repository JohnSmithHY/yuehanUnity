import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput
 } from 'react-native';

class LKTextInput extends Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }
    render(){
        return (
            <View style={styles.mainView}>
                <TextInput placeholder={'fssfsf请输入姓名'}
                style={styles.textInputStyle}
                clearButtonMode='always'
                keyboardType='number-pad'
                onChangeText={
                    (text) => {
                        this.setState({
                                inputValue:text
                            }
                        )
                    }
                }
                ></TextInput>
                <Text>输入的内容:{this.state.inputValue}</Text>
            </View>
        )
    } 
 };

 const styles = StyleSheet.create({
     textInputStyle: {
         height: 40,
         width:300,
         marginLeft:10,
         paddingLeft:10,
         borderColor: 'gray',
         borderWidth: 1,
         borderRadius:8
     }
 });

 export default LKTextInput;