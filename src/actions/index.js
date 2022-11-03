// fetch posts
// fetch users

import axios from "../api/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const reponse = await axios.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: reponse.data });
};


