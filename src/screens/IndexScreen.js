import React, { useContext } from 'react'
import { Text, StyleSheet, View, FlatList, Button} from 'react-native' 
import BlogContext from '../context/BlogContext'

const IndexScreen = () =>{
    const {data, addBlogPost} = useContext(BlogContext)
    return(
        <View>
            <Text>Hello Im Blog App</Text>
            <Button title='Add' onPress={addBlogPost}/>
            <FlatList
                data = {data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({});

export default IndexScreen;