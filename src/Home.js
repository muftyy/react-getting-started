import React, { Component } from 'react';
import Axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import ball from './pokeball.png'

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
          <img src={ball}/>
            <div className="card-content">
              <div className="card-title">
                {/* <span>{post.title}</span> */}
                <Link to={'/' + post.id}>{post.title}</Link>
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
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home;
