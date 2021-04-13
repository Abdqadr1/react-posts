
import {Link} from 'react-router-dom'
import ball from '../ball.jpg'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (todos.map(todo => {
        return (
            <div className="post card" key={todo.id}>
                <img src={ball} alt="a ball" />
                <div className="card-content">
                <Link to={'./' + todo.id}>
                    <span className="card-title">{todo.title}</span>
                </Link>
                    <p>{todo.body}</p>
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