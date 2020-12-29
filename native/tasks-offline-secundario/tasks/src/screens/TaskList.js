import React,{Component} from 'react'
import {View, Text, ImageBackground,StyleSheet,FlatList,TouchableOpacity,Platform} from 'react-native'


import TodayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import CommonStyles from '../CommonStyles'
import Task from '../components/Task'

import Icon from 'react-native-vector-icons/FontAwesome' 
//import AddList from './AddTask'
import AddTask from './AddTask'

export default class TaskList extends Component{

    state ={
        showDoneTasks:true ,
        showAddTask: true, /***/
        visibleTasks: [],
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

    componentDidMount = () =>{
        this.filterTasks()
    }

    toggleFilter = ( ) =>   {
        this.setState({  showDoneTasks : !this.state.showDoneTasks }, this.filterTasks)
    }

    toggleTask = taskId =>  { 
        const tasks = [...this.state.tasks]
        tasks.forEach(task =>{
            if(task.id === taskId)  {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({   tasks  },this.filterTasks)
    }

   /*     

   isPendding = (task) =>{
       return  task.doneAt ===null
   }
   
   */

    filterTasks = () => {
        let visibleTasks = null
        if(this.state.showDoneTasks){
            visibleTasks = [ ...this.state.tasks]
        }else{
            const pendding = task => task.doneAt ===null
            visibleTasks = this.state.tasks.filter(pendding)
            /**poderia ser feita assim 
             * 
             * visibleTasks = this.state.tasks.filter(isPendding)
             * 
             * */   
            
             //a função foi passada como parametro
             //por isso não usa-se isPendding( ) e sim isPendding
        }

        this.setState({ visibleTasks })
    }

    render(){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style={styles.conteiner}>

                      <AddTask isVisible={this.state.showAddTask}
                         onCancel={() => this.setState({showAddTask:false})}/>
                     {/* */}
                <ImageBackground 
                source={TodayImage}
                style={styles.background}>

                        <View styles={styles.iconBar}>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                    <Icon 
                                    name={ this.state.showDoneTasks ? 'eye' : 'eye-slash' }
                                    size={20}
                                    color={CommonStyles.colors.secondary}/>
                            </TouchableOpacity>
                        </View>

                    <View style={styles.tittleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.taskList}>
                    <FlatList   data={this.state.visibleTasks}
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
        },
        iconBar:{
            flexDirection:'row',
            marginHorizontal:20,
            justifyContent:'flex-end',
            marginTop:Platform.OS === 'ios' ? 30 : 10
        }
})
