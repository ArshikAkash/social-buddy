import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const showPostDetails = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    };
    return (
        <div>
            <h3>
                <b>
                    post no:
                    {id} <br /> {title}
                </b>
            </h3>
            <p>{body}</p>
            <button onClick={() => showPostDetails(id)}>Post Details</button>
        </div>
    );
};

export default Post;
