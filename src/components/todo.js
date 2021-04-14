import {useContext} from 'react'
import { PostContext } from '../context/postContext';

const Todo = (props) => {
    const {posts, deletePost} = useContext(PostContext)
    let id = props.match.params.post_id;
    const post = posts.find(p => p.id === Number(id))
    const _post = post ? (
                    <div className="post">
                        <h4 className="center">{post.title}</h4>
                        <p>{post.body}</p>
                        <div className="center"><button className="btn gray" onClick={()=> deletePost(id)}>Delete</button></div>
                    </div>
                ) : (
                    <div className="center"> Loading todo... </div>
                )


    return (
        <div className="container">
             {_post}
        </div>
    )
}

export default Todo