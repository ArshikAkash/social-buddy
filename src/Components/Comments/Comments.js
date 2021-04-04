import React from 'react';

const Comments = (props) => {
    const { name, email, body } = props.comment;
    return (
        <div>
            <h3>Name :{name}</h3>
            <h3>Email :{email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comments;
