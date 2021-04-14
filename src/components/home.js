import React, {Component} from 'react'
// import axios from 'axios'
import Todos from './Todos';
import AddTodo from './AddTodo'
// import { connect } from 'react-redux'
import { addPost }  from '../actions/postActions'

class Home extends Component{


componentDidMount(){
    // using axios module to fetch data from a uri
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
    //     console.log(result)
    //     this.setState({
    //         todos: result.data.slice(0, 15)
    //     })
    // })

    // using the in-built fetch method to get data from a uri
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(json => this.setState({
    //     todos: json.slice(0, 15)
    // }))
}

deleteTodo = (id) => {
  // let newList = this.state.todos.filter(todo => {return todo.id !== id})
  // this.setState({
  //   todos: newList
  // })
}

addPost = (post) => {
  this.props.addPost(post);
}

  render(){
    console.log(this.props);
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Posts</h1>
        <AddTodo addPost= {this.addPost}/>
        <Todos todos={this.props.posts} deleteTodo={this.deleteTodo}/>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts 
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    addPost: (post) => {
        dispatch(addPost(post));
    }
  }
}

export default (Home);