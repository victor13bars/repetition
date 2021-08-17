import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [comments, setComments] = useState([])
    const [fetchCommentsPostById, isComLoading, Comerror] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
        console.log(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста № {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии :</h1>
            {/*{isComLoading*/}
            {/*    ? <Loader/>*/}
            {/*    : <div></div>*/}
            {/*}*/}
            <div>
                {comments.map(comm =>
                    <div style={{marginTop:15}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostIdPage;