import React, { Component } from 'react';
import { 
    View,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    Dimensions,
    Alert,
    ScrollView,
    RefreshControl,
 } from 'react-native';

const {width, height} = Dimensions.get('window');
class LKFlatListView extends Component {
     constructor() {
         super();
         this.state = {
             isRefresh:false,
             RowData:[{'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'},
                      {'title':'初始化数据'}]
         }
     }
    render(){
        const rowsArr = this.state.RowData.map((value,index) => (<Row data={value} key={index}/>))
        return (
            <ScrollView style={styles.mainView}
              refreshControl = {
                  <RefreshControl
                     refreshing = {this.state.isRefresh}
                     onRefresh = {() => this._onRefresh()}
                    >
                    </RefreshControl>
              }>
                {rowsArr}
            </ScrollView>
        )
    }

    _onRefresh(){
        //显示指示器
        this.setState({
            isRefresh:true
        })
        ///模拟2s
        setTimeout(()=>{
            let newData = [{title:'我是新拉下来的数据1'},
                           {title:'我是新拉下来的数据2'},
                           {title:'我是新拉下来的数据3'},
                           {title:'我是新拉下来的数据4'},
                           {title:'我是新拉下来的数据5'},].concat(this.state.RowData);
            this.setState({
               isRefresh: false,
               RowData: newData 
            });

        },2000);
    }
 };

 class Row extends Component {
     static defaultProps = {
         data:{}
     }
     render() {
         return(
             <View style={styles.rowStyle}>
                 <Text> {this.props.data.title} </Text>
             </View>
         );
     }
 }

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'red'
    },
    rowStyle: {
        width: width,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        justifyContent:'center'
    }
})

 export default LKFlatListView;