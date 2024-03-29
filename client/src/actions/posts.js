import * as api from '../api';

//Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts();
    dispatch( { type: 'FETCH ALL', payload: []});
  } 
  catch (error) {
    console.log(error.message);
    
  }
}

export const createPost = (post) => async (dispatch) => {
  try{
      const {data} = await api.createPost(post);

      dispatch({ type: 'CREATE', payload: data});
  } catch (error) {
   console.log(error);
  }
}
