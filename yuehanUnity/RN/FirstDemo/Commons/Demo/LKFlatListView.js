import React, { Component } from 'react';
import { 
    View,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList
 } from 'react-native';

const {width, height} = Dimensions.get('window');
class LKFlatListView extends Component {
     constructor() {
         super();
         this.state = {
             dataSource:[
                 '第一行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行',
                 '第二行',
                 '第三行'
             ]
         }
     }
    render(){
        return (
            <FlatList 
                style={styles.mainView}
                data={this.state.dataSource}
                renderItem={({item,index})=>this._renderItem(item,index)}
                keyExtractor={(item,index) => (item+index)}>
            </FlatList>
        )
    }
    _renderItem(item,index){
        return (
            <TouchableOpacity 
              style={styles.buttonStyle}
              onPress={() =>{
                  this._pressAction(index)
              }}>
                <Text>{item+index}</Text>
            </TouchableOpacity>
        );
    }

    _pressAction(index) {
        alert(index)
    }
 };

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    buttonStyle: {
        width: width,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        alignItems: "center",
        justifyContent: "center"
    }
})

 export default LKFlatListView;