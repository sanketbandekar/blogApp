import React,{ useState, useReducer } from 'react'
import createDataContext from '../context/createDataContext';

const blogReducer = (state,action) => {
    switch(action.type){
        case 'delete_blog':
            return state.filter( blogPost => blogPost.id !== action.payload )
        case 'add_blog':
            return [...state, {id: Math.floor(Math.random() * 99999),title: `Blog Post #${state.length + 1}`}]
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
   return () => {
    dispatch({type: 'add_blog'})
   }
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
     dispatch({type: 'delete_blog', payload: id})
    }
 }

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost},
    []
)