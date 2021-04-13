import React, { Component } from 'react';
import {connect} from 'react-redux'

class AddPost extends Component {
    state = {
        body: "",
        title: ""
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let addPost = this.props.addPost;
        let id = this.props.stateSize + 1;
        console.log("handle submit",id)
        addPost({...this.state, id});
        // event.target.reset(); // or 
        this.setState({
            body: "",
            title: ""
        })
    }
    render(){
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                <label htmlFor="body">Body</label>
                <input type="text" id="body" onChange={this.handleChange} value={this.state.body}/>
                <div className="center"><button className="btn gray">Add Post</button></div>
            </form>
        </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    
    console.log("map state to props",state)
    return {
        stateSize: state.size
    }
}

export default connect(mapStateToProps)(AddPost)
