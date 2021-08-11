import React, {useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: "JS - My Favorite languages"},
        {id: 2, title: 'JavaScript2', body: "JS - My Favorite languages"},
        {id: 3, title: 'JavaScript3', body: "JS - My Favorite languages"}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список Pro JS"/>
        </div>
    );
}

export default App;
