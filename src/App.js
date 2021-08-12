import React, {useMemo, useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Mymodal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', body: "zz"},
        {id: 2, title: 'dd', body: "cc"},
        {id: 3, title: 'bb', body: "ee"},
        // {id: 1, title: 'JavaScript1', body: "JS - My Favorite languages"},
        // {id: 2, title: 'JavaScript2', body: "JS - My Favorite languages"},
        // {id: 3, title: 'JavaScript3', body: "JS - My Favorite languages"}
    ])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список Pro JS"/>
        </div>
    );
}

export default App;
