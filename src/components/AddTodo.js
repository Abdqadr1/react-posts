import React, { useContext, useState } from 'react';
import { PostContext } from '../context/postContext';

const AddPost = () => {

    const [input, setInput] = useState({
        body: "",
        title: ""
    })

    const {size, setSize, addPost} = useContext(PostContext);

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let id = size + 1;
        console.log("handle submit",id)
        addPost({...input, id});
        setSize(id);
        // event.target.reset(); // or 
        setInput({
            body: "",
            title: "",
        })
    }

    return ( 
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} value={input.title}/>
                    <label htmlFor="body">Body</label>
                    <input type="text" id="body" onChange={handleChange} value={input.body}/>           
                    <div className="center"><button className="btn gray">Add Post</button></div>
                </form>
            </div>
        );
}
 
export default AddPost;
