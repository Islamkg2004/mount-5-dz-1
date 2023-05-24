import React from 'react';

function DeletePost({ post, onCancel, onConfirm }) {
    return (
        <div>
            <h3>Вы действительно хотите удалить пост "{post.title}"?</h3>
            <button onClick={onConfirm}>Да</button>
            <button  onClick={onCancel}>Нет</button>
        </div>
    );
}

export default DeletePost;