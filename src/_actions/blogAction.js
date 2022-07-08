import { ADD_POST, DELETE_POST, SET_POST, SET_POSTS } from "../_actionTypes";
import Api from "../_services/Api";

// Blog Actions
export const fetchPosts = () => {
  return async (dispatch) => {
    await Api.getData('posts')
      .then(res => {
        dispatch(setPosts(res.data))
      })
      .catch(error => console.log('Error: ', error.message))
  }
}

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts
});

export const fetchPost = (id) => {
  return async (dispatch) => {
    await Api.getData(`posts/${id}`)
      .then(res => {
        dispatch(setPost(res.data))
      })
      .catch(error => console.log('Error: ', error.message))
  }
}

export const setPost = (post) => ({
  type: SET_POST,
  payload: post
});

export const addPost = ({ title, content, author }) => ({
  type: ADD_POST,
  payload: {
    title,
    content,
    author
  }
});

export const deletePost = ({ id }) => ({
  type: DELETE_POST,
  payload: {
    id
  }
}); 