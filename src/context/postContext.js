import { createContext, Component } from "react"

export const PostContext = createContext();


class PostContextProvider extends Component {
    state = { 
        posts: [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              },
              {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
              },
              {
                "userId": 1,
                "id": 4,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
              },
        ]
     }

     addPost(post){
        this.setState({
            posts: [post, ...this.state.posts]
        })
     }

     deletePost(id){
        this.setState({
            posts: this.state.posts.filter(p => p.id  !== id)
        })
     }

    render() { 
        return ( 
            <PostContext.Provider value={{...this.state, deletePost:this.deletePost, addPost:this.addPost}}>
                {this.props.children}
            </PostContext.Provider>
         );
    }
}
 
export default PostContextProvider;