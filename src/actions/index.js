// fetch posts
// fetch users

import axios from "../api/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const posts = getState().posts;

  console.log(posts);

  const userIds = posts.map((post) => post.userId);

  const uniqueUserIds = new Set(userIds);

  uniqueUserIds.forEach((userId) => dispatch(fetchUser(userId)));
};

export const fetchPosts = () => async (dispatch) => {
  const reponse = await axios.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: reponse.data });
};

export const fetchUser = (userId) => async (dispatch) => {
  const reponse = await axios.get(`/users/${userId}`);

  dispatch({ type: "FETCH_USER", payload: reponse.data });
};
