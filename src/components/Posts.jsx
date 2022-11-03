import React, { useEffect } from "react";

import { connect } from "react-redux";

import User from "./User";

import { fetchPosts } from "../actions";

const Posts = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchPosts();
  }, []);

  const renderPosts = () => {
    return props.posts.map((post) => {
      return (
        <div className="post-wrapper" key={post.id}>
          <div className="post-title">Title: {post.title}</div>
          <div className="post-description">Description: {post.body}</div>
          <User />
        </div>
      );
    });
  };

  return (
    <div className="posts-wrapper">
      {props.posts.length < 1 
      ? <div>No posts added yet</div> 
      : renderPosts()}
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapPropsToState, { fetchPosts })(Posts);
