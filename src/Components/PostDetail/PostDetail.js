import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [id]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [id]);

    return (
        <div>
            <h1>This is post details :{id}</h1>
            <p>
                <b>user posted :</b>
                <br /> {post.body}
            </p>
            <h3>Number of comments: {comments.length}</h3>

            {comments.map((comment) => (
                <Comments comment={comment}></Comments>
            ))}
        </div>
    );
};

export default PostDetail;
