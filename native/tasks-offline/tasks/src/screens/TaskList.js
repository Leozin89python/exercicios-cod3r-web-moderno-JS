import React,{Component} from 'react'
import {View, Text, ImageBackground,StyleSheet,FlatList} from 'react-native'

import TodayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import CommonStyles from '../CommonStyles'
import Task from '../components/Task'
 

export default class TaskList extends Component{

    state ={
        tasks:[{
            id:Math.random(),
            desc:'terminar os livrois de t.i',
            estimateAt:new Date(),
            doneAt:new Date()
        },{
            id:Math.random(),
            desc:'fazer a atividade de react native',
            estimateAt:new Date(),
            doneAt:null
        },{
            id:Math.random(),
            desc:'fazer a atividade de spring-boot-jpa',
            estimateAt:new Date(),
            doneAt:null
        }]
    }

    toggleTask = taskId =>  { 
        const tasks = [...this.state.tasks]
        tasks.forEach(task =>{
            if(task.id === taskId)  {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({   tasks  })
    }

    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style={styles.conteiner}>
                <ImageBackground 
                source={TodayImage}
                style={styles.background}>

                    <View style={styles.tittleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.taskList}>
                    <FlatList   data={this.state.tasks}
                                keyExtractor={item => `${item.id}`}
                                renderItem={({item})  =><Task {...item} toggleTask={this.toggleTask} />}/>
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
        },
        tittleBar:{
            flex:1,
            justifyContent:'flex-end',
        },
        title:{
            fontFamily:CommonStyles.fontFamily,
            fontSize:50,
            color:CommonStyles.colors.secondary,
            marginLeft:20,
            marginBottom:20
        },
        subtitle:{
            fontFamily:CommonStyles.fontFamily,
            color:CommonStyles.colors.secondary,
            fontSize:20,
            marginLeft:20,
            marginBottom:30
        }
})