
import React, { Component } from 'react';
import { 
    View,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    Dimensions,
    SectionList
 } from 'react-native';

const {width, height} = Dimensions.get('window');

class SectionSimpleDemo extends Component {
    render(){
        return (
            <SectionList 
               style={{backgroundColor:'blue'}}
               renderItem={({item,index,section}) =>(
                   <Text key={index}>{item}</Text>
               )}
               renderSectionHeader={
                   ({section:{title}}) => (
                   <Text style={{fontWeight: 'bold'}}>{title}</Text>
                   )
               }
               sections={[{title:'第一组',data:['第一组第一行','第一组第二行']},
                          {title:'第二组',data:['第一组第一行','第一组第二行']},
                          {title:'第三组',data:['第一组第一行','第一组第二行']}]}
               ></SectionList>
        )
    }
}

const carData = require('./Car').total;

class LKSectionList extends Component {
    constructor() {
        super();
        this.state = {
            dataSource:carData
        }
    }
    render(){
        return (
            <SectionList 
                renderItem={({item, index, section}) => this._renderItem(item,index,section)}
                renderSectionHeader={({section:{title}}) => this._renderHeader(title)}
                sections={this.state.dataSource}
                keyExtractor={(item,index) => item+index }
            ></SectionList>
        )
    }
    _renderItem(item,index,section) {
        return(
            <TouchableOpacity style={styles.buttonStyle}>
                <Image source={require('../Img/timg.png')}
                style={{width:100,height:100}}></Image>
               <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    _renderHeader(data) {
        return(
            <View style={{height:30,backgroundColor:'blue'}}>
            <Text>{data}</Text>
        </View>
        )
    }
 };


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonStyle: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        flexDirection: "row",
        alignItems: 'center',
        padding:10
    },
    viewStyle: {
        flex:1,
        padding:10,
        marginLeft: 10,
        justifyContent: 'space-around'
    },
})

 export default LKSectionList;