import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { AntDesign } from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context)

    const result = state.find( blogpost => blogpost.id === navigation.getParam('id') )

    return <View>
        <Text>{result.title}</Text>
        <Text>{result.content}</Text>
    </View>
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return{
        headerRight : () => (
            <TouchableOpacity onPress={ () => navigation.navigate('Edit', {id: navigation.getParam('id')} )} >
               <AntDesign name="edit" size={30} color="black" style={{marginRight: 10}}/>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({})

export default ShowScreen