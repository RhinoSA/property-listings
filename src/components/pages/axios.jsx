import React, { Component } from "react";
import axios from "axios";
import Title from "../modules/title";
import { Link } from "react-router-dom";
import Loading from "../../images/gif/loading-arrow.gif";

class Axios extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    // Return a promise
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postlist = posts.length ? (
      posts.map(post => {
        return (
          <div className="card mt-2 mb-2" key={post.id}>
            <div className="card-body">
              <div className="card-title">
                <Link to={"/" + post.id}>{post.title}</Link>
              </div>
              <div className="card-text">{post.body}</div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="text-center">
        <img src={Loading} alt="loading" />
      </div>
    );

    return (
      <div className="container">
        <Title title="Axios" />
        {postlist}
      </div>
    );
  }
}

export default Axios;
