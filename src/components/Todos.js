
import {Link} from 'react-router-dom'
import ball from '../ball.jpg'
import { PostContext } from '../context/postContext'
import {useContext} from 'react'

const Todos = ({todos, deleteTodo}) => {

    const {posts} = useContext(PostContext)

    const todoList = posts.length ? (posts.map(post => {
        return (
            <div className="post card" key={post.id}>
                <img src={ball} alt="a ball" />
                <div className="card-content">
                <Link to={'./' + post.id}>
                    <span className="card-title">{post.title}</span>
                </Link>
                    <p>{post.body}</p>
                </div>
            </div>
        )
    })) :  (<p className="center"> No posts yet </p>)

    return (
        <div className="todos container">
            {todoList}
        </div>
    )

}

export default Todos