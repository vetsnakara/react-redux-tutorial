import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";
import Pokeball from "../pokeball.png";

class Home extends Component {
  // state = { posts: [] };

  // componentDidMount() {
  //   setTimeout(
  //     () =>
  //       axios
  //         .get("https://jsonplaceholder.typicode.com/posts")
  //         .then(({ data }) => this.setState({ posts: data.slice(0, 10) })),
  //     1000
  //   );
  // }

  render() {
    console.log(this.props);

    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(({ id, title, body }) => {
        return (
          <div className="post card" key={id}>
            <img src={Pokeball} alt="pokeball" />
            <div className="card-content">
              <Link to={`/${id}`}>
                <h4 className="card-title red-text">{title}</h4>
              </Link>
              <p>{body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet ...</div>
    );

    return (
      <div className="home container">
        <h3 className="center">Home</h3>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    posts: state.posts
  };
};

const component = connect(mapStateToProps)(Home);

export default component;
