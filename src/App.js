
import "../src/styles/App.css"
import {useState} from "react";
import PostList from "./components/PostList";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'}
    ]);



    return (
        <div className="App">

            <PostList posts={posts} title={"Список постов 1"}/>
            <PostList posts={posts} title={"Список постов 2"}/>

        </div>



    );
}

export default App;
