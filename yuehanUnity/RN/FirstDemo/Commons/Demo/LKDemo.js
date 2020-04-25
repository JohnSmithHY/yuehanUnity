import React, { Component } from 'react';
import { 
    View,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    Dimensions,
    Alert
 } from 'react-native';

const {width, height} = Dimensions.get('window');
class LKDemo extends Component {
     constructor() {
         super();
         this.state = {
             shopArr:[]
         }
     }
    render(){
        const {name, intro,bodyText} = this.state;
        return (
            <View style={styles.mainView}>
                {/*上部分*/}
                <View style={styles.topView}>
                    <TouchableOpacity style={styles.clickButton}
                    onPressIn = {()=> this._addShop()}
                    >
                        <Text style={{color: 'gray'}}>添加商品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}
                    onPressIn={() => this._removeShop()}
                    >
                        <Text style={{color: 'white'}}>删除商品</Text>
                    </TouchableOpacity>
                </View>
                {/* 下部分 */}
                <View style={styles.bottomView}>
                    {/* {this.state.shopArr} */}
                </View>
            </View>
        )
    }
    
    _addShop() {
        let cols = 3,shopW = 100,shopH = 120;
        let index = this.state.shopArr.length;
        let row = Math.floor(index/cols );
        let col = Math.floor(index % cols);
        let xspace = (0.9 * width - cols * shopW)

    }

    _removeShop() {

    }
 };

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'blue',
    },
    topView: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: 'center'
    },
    clickButton: {
        backgroundColor: 'cyan',
        height: 40,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: 'red',
        height: 40,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    bottomView: {
        width: 0.9 * width,
        height: 0.7 * height,
        marginTop: 40,
        backgroundColor:'#fff',
        marginLeft: 0.05 * width
    }
})

 export default LKDemo;