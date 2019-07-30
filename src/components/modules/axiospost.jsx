import React, { Component } from "react";
import axios from "axios";
import Title from "../modules/title";
import { Link } from "react-router-dom";

class AxiosPost extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        post: res.data
      });
    });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <Title title={this.state.post.title} />
        <p>{this.state.post.body}</p>
        <p>
          <Link className="btn btn-secondary" to="/axios">
            Back
          </Link>
        </p>
      </div>
    ) : (
      <div>
        <Title title="Loading..." />
      </div>
    );
    return <div className="container">{post}</div>;
  }
}

export default AxiosPost;
