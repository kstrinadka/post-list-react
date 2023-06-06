
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


    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
    }

    return (
        <div className="App">

            <form>

                {/*Управляемый компонент*/}
                <MyInput
                    value = {title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Навание поста"
                />
                <MyInput type="text" placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>



            <PostList posts={posts} title={"Посты про JS"}/>


        </div>



    );
}

export default App;
