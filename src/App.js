
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

    const [post, setPost] = useState({
        title: '',
        body: ''
    })


    const addNewPost = (e) => {
        e.preventDefault()          //чтобы не происходило обновление страницы
        setPosts([...posts, {...post, id: Date.now()}])  // к старым постам добавляем новый
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">

            <form>



                <MyInput
                    value={post.title}

                    //изменяем нужное поле, а остальной объект оставляем в неизменном виде
                    onChange={e => setPost({
                        ...post,
                        title: e.target.value
                    })}
                    type="text"
                    placeholder="Навание поста"
                />
                {/*<input ref={bodyInputRef}/>*/}

                {/*Неуправляемый (неконтролируемый) компонент*/}
                <MyInput
                    value={post.body}
                    onChange={e => setPost({
                        ...post,
                        body: e.target.value
                    })}
                    type="text"
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>



            <PostList posts={posts} title={"Посты про JS"}/>


        </div>



    );
}

export default App;
