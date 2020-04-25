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
class FetchDemo extends Component {
     constructor() {
         super();
         this.state = {
             dataSource:[
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe哦'},
                 {title:'¥100',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥100000',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥1000000',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥10000',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe嗨哦'},
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
                 {title:'¥10',imr:'../Img/timg.png',name:'ffsfdffsfsfkwhrehjkrhwjkrhewjkerhjwkhrjkwhrkjwhrjkewrewrwe'},
             ]
         }
     }

     componentDidMount() {
        let url ='https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
        fetch(url).
        then((response) => {
            let json = response.json()
            alert(json.movie)
        }).
        then((responseJson) => {responseJson.movie}).catch((error) => {
            console.log(error);
        });
     }

    render(){
        return (
            <FlatList 
                style={styles.mainView}
                data={this.state.dataSource}
                renderItem={({item,index})=>this._renderItem(item,index)}
                keyExtractor={(item,index) => (item+index)}
                ListHeaderComponent={()=>(
                    <View style={{width:width, height:400,backgroundColor:'red'}}>
                        <Image 
                             source={require('../Img/timg.png')}
                             style={{width:width, height:400}}></Image>
                    </View>
                )}
                ListFooterComponent={()=>(
                    <View style={{width:width, height:100,backgroundColor:'gray'}}></View>
                )}
                >
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
                <Image 
                   source={require('../Img/timg.png')}
                   style={{width:80,height:80,backgroundColor: 'red'}}></Image>
                <View style={styles.viewStyle}>
                   <Text numberOfLines={2} style={{fontSize: 18}}>{item.name}</Text>
                   <Text>{item.title}</Text>
                </View>
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
    }
})

 export default FetchDemo;