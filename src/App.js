
import "../src/styles/App.css"
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'}
    ]);


    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        console.log(sort)
        setPosts([...posts.sort((a, b) => a[sort].localeCompare(b[sort]))])
    }



    return (
        <div className="App">

            <PostForm create={createPost}/>
            <hr style={{margin: '15 px 0'}}/>
            <div>
                
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>

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
