
import "../src/styles/App.css"
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'}
    ]);

    const [filter, setFilter] = useState({sort: '', querySearch: ''})
    const [modal, setModal] = useState(false)

    // чтобы не перевызывалось при вводе в поля инпута
    const sortedPosts = useMemo(() => {
        console.log("отработала функция getSortedPosts")
        if (filter.sort) {
            return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))]
        }
        return posts
    }, [filter.sort, posts])

    // оставляем посты только с подходящим названием
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.querySearch))
    }, [filter.querySearch, sortedPosts])

    // добавление нового элемента к массиву
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // Получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">

            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15 px 0'}}/>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"}/>

        </div>



    );
}

export default App;
