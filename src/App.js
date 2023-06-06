
import "../src/styles/App.css"
import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'}
    ]);



    return (
        <div className="App">

            <form>
                <MyInput type="text" placeholder="Навание поста"/>
                <MyInput type="text" placeholder="Описание поста"/>
            </form>

            <MyButton disabled>Создать пост</MyButton>

            <PostList posts={posts} title={"Посты про JS"}/>


        </div>



    );
}

export default App;
