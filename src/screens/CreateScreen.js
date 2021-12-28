import React, { useContext} from 'react'
import { StyleSheet } from 'react-native'
import BlogFormPost from '../components/BlogFormPost'
import { Context } from '../context/BlogContext'

const CreateScreen = ({navigation}) => {

    const { addBlogPost } = useContext(Context)

    return <BlogFormPost onSubmit = { (title,content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
    } } />
}



const styles = StyleSheet.create({})

export default CreateScreen