import React,{Component} from 'react'
import {View, Text, ImageBackground,StyleSheet} from 'react-native'

import TodayImage from '../../assets/imgs/today.jpg'
export default class TaskList extends Component{

    render(){
        return(
            <View style={styles.conteiner}>
                <ImageBackground 
                source={TodayImage}
                style={styles.background}>
                </ImageBackground>

                <View style={styles.taskList}>
                    <Text>taskList</Text>
                </View>

            </View>
        )
     }
}

const styles =  StyleSheet.create({
        conteiner:{
            flex: 1
        },
        background:{
            flex:3
        },
        taskList:{
            flex:7
        }
})