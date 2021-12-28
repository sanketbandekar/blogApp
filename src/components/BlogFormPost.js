import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const BlogFormPost = ({onSubmit, initialValue}) => {

    const [title, setTitle] = useState(initialValue.title)
    const [content, setContent] = useState(initialValue.content)

    

    return <View style={styles.main}>
        <Text style={styles.header}>Enter Title:</Text>
        <TextInput value={title} onChangeText={ text => setTitle(text) } style={styles.input}/>
        <Text style={styles.header}>Enter Content:</Text>
        <TextInput value={content} onChangeText={ text => setContent(text) } style={styles.input}/>
        <Button title="SAVE BLOG POST" onPress={ () => onSubmit(title,content) }/>
    </View>
}

BlogFormPost.defaultProps = {
    initialValue: {
        title: '',
        content: ''
    }
}



const styles = StyleSheet.create({

    main: {
        margin: 10
    },
    input: {
        fontSize: 22,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'black',
        padding: 7
    },

    header: {
        fontSize: 28,
        marginBottom: 15
    }
})

export default BlogFormPost