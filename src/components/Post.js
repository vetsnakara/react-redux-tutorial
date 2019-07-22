import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

// import axios from "axios";

export class Post extends Component {
  // state = {
  //   post: null
  // };

  // componentDidMount() {
  //   let id = this.props.match.params.post_id;

  //   setTimeout(
  //     () =>
  //       axios
  //         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //         .then(({ data: post }) => this.setState({ post })),
  //     1000
  //   );
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);

    const post = this.props.post ? (
      <div className="post">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div>
          <button className="btn red darken-2" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center" style={{ marginTop: 20 }}>
        Post is loading ...
      </div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.post_id;

  const post = state.posts.find(post => post.id === id);

  return {
    post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
