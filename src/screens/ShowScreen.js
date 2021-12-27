import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context)

    const result = state.find( blogpost => blogpost.id === navigation.getParam('id') )

    return <View>
        <Text>{result.title}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default ShowScreen