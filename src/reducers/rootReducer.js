const initState = {
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

          //  add more posts 
          {
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
          },
          {
            "userId": 2,
            "id": 11,
            "title": "et ea vero quia laudantium autem",
            "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
          },
          {
            "userId": 2,
            "id": 12,
            "title": "in quibusdam tempore odit est dolorem",
            "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
          },
          {
            "userId": 2,
            "id": 13,
            "title": "dolorum ut in voluptas mollitia et saepe quo animi",
            "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
          },
          {
            "userId": 2,
            "id": 14,
            "title": "voluptatem eligendi optio",
            "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
          },
    ],
    size: 4
}

const rootReducer = (state = initState, action) => {
   console.log(action)
   switch (action.type){
     case "DELETE_POST" :
       let newPost = state.posts.filter(post => post.id !== action.id);
       console.log(newPost)
       return{
          ...state,
          posts: newPost, 
       }

      
      case "ADD_POST": 
      return {
        ...state,

        // do some stuffs here in the master branch
        posts: [action.post, ...state.posts],
        size: state.size + 1 
      }

      //  first push after github clone
    default: return state;
   }
}

export default rootReducer