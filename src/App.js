
import "../src/styles/App.css"
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'}
    ]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }




    return (
        <div className="App">

            <PostForm create={createPost}/>

            {/*/условная отрисовка для случая, если постов нет/*/}
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={"Посты про JS"}/>
                : <div>
                    <h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>
                  </div>
            }



        </div>



    );
}

export default App;
