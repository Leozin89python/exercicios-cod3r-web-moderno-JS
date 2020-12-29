import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import CommonStyles from '../CommonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props =>{

    const doneOrNotStyle = props.doneAt != null ? 
    {textDecorationLine: 'line-through'} : {}
    
    const date = props.doneAt ? props.doneAt : formattedDate

    const formattedDate = moment(props.estimateAt).locale('pt-br')
                .format('ddd, D [de] MMMM')
    return(
        <View style={styles.conteiner}>

            <TouchableWithoutFeedback
                onPress={() => props.toggleTask(props.id)}>
                <View style={styles.checkConteiner}>
                    {getCheckView(props.doneAt)}
                </View>
            </TouchableWithoutFeedback>
            

            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
          
        </View>
    )
} 

function getCheckView(doneAt){
    if(doneAt != null){
        return (
            <View style={styles.done}>
                   <Icon name='check' 
                   size={20}
                   color="#FFF"></Icon>
            </View>
        )
    }else{
        return (
            <View>
                <Text style={styles.pendding}>
                 
                </Text>
            </View>
        )
    }  
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection:'row',
        borderColor:'#AAA',
        borderBottomWidth:1,
        alignItems:'center',
        paddingVertical:10
    },  
    checkConteiner:{
        width:'20%',
        alignItems:'center',
        justifyContent: 'center'
    },
    pendding:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#555'
    },
    done:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        backgroundColor:'#4d7031',
        alignItems:'center',
        justifyContent:'center'
    },
    desc:{
        fontFamily:CommonStyles.fontFamily,
        color:CommonStyles.colors.mainText,
        fontSize:15,
    },
    date:{
        fontFamily:CommonStyles.fontFamily,
        color:CommonStyles.colors.subText, 
        fontSize:12
    }
})