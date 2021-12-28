import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogFormPost from '../components/BlogFormPost'

const EditScreen = ({navigation}) => {

    const { state, editBlogPost } = useContext(Context) 
    const blogPost = state.find( blogpost => blogpost.id === navigation.getParam('id') )  

    return <BlogFormPost initialValue={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => editBlogPost(
            navigation.getParam('id'),
            title,
            content,
            () => navigation.pop()
        ) }
    />
}

const styles = StyleSheet.create({})

export default EditScreen