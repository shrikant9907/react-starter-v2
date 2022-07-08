import { ADD_POST, SET_POST } from "../_actionTypes";
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
  type: SET_POST,
  payload: posts
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
  type: 'DELETE_POST',
  payload: {
    id
  }
}); 