import React, {Component} from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import {deletePost} from '../actions/postActions'

class Todo extends Component {
    
    componentDidMount(){
        
        //  using axios module to fetch data from a uri
        // axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(result => {
        //     console.log(result)
        //     this.setState({
        //         todo: result.data
        //     })
    
        // })
    }

    handleClick = (e) => {
        this.props.deletePost(this.props.post.id);

        // redirect to the homepage
        this.props.history.push('./')
    }

    render(){
        console.log(this.props)
        const post = this.props.post;
        const _post = post ? (
            <div className="post">
                <h4 className="center">{post.title}</h4>
                <p>{post.body}</p>
                <div className="center"><button className="btn gray" onClick={this.handleClick}>Delete</button></div>
            </div>
        ) : (
            <div className="center"> Loading todo... </div>
        )

        return(
            <div className="container">
                {_post}
            </div>
        )
    }
}


// connect to the redux store
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    let post = {
        post: state.posts.find(post => post.id.toString() === id)
    }
    console.log(post)
    return post;

}

//delete post in the redux data store
const mapDispatchProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Todo)