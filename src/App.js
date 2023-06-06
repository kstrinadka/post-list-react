
import "../src/styles/App.css"
import {useRef, useState} from "react";
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

    //  хук, с помощью которого можно напрямую к DOM обратиться
    // и прочитать там value
    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current) //в консоль выводится DOM элемент
    }

    return (
        <div className="App">

            <form>



                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Навание поста"
                />
                {/*<input ref={bodyInputRef}/>*/}

                {/*Неуправляемый (неконтролируемый) компонент*/}
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>



            <PostList posts={posts} title={"Посты про JS"}/>


        </div>



    );
}

export default App;
