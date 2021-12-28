import React,{ useState, useReducer } from 'react'
import createDataContext from '../context/createDataContext';

const blogReducer = (state,action) => {
    switch(action.type){
        case 'edit_blog':
            return state.map( blogPost => {
                return blogPost.id === action.payload.id
                ? action.payload
                : blogPost
            } )
        case 'delete_blog':
            return state.filter( blogPost => blogPost.id !== action.payload )
        case 'add_blog':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
        }]
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
   return (title, content, callback) => {
    dispatch({type: 'add_blog', payload: {title, content}})
    if(callback){
        callback()
    }
   }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
     dispatch({type: 'delete_blog', payload: id})
    }
}
 const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
     dispatch({type: 'edit_blog', payload: { id, title, content }})
     if(callback){
        callback()
    }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost},
    [{title: "hello", content: "OJOK", id: 1}]
)