
import Todos from './Todos';
import AddTodo from './AddTodo'

const Home = () => {
  return (
      <div className="todo-app container">
      <h1 className="center blue-text">Posts</h1>
        <AddTodo />
        <Todos />
      </div>
    );
}


export default Home;