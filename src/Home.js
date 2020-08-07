import React, { Component } from 'react';
import Axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css'

class Home extends Component{
  state = {
    posts: []
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        this.setState({
          posts: res.data.slice(0,10)
        })
    })
  }

  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <div className="card-content">
              <div className="card-title">
                <span>{post.title}</span>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div>
        Posts Loading...
      </div>
    )

    return(
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home;
