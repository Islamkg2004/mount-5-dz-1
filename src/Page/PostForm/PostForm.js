import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

import axios from 'axios';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const  navigate = useNavigate()
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = { title, body };
        axios
            .post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(resp => navigate('/post'))
            .catch((error) => {
                console.error('Ошибка при создании поста:', error);
            });
    };

    return (
        <div>
            <h2>Форма создания поста</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Заголовок:</label>
                    <input type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label>Содержание:</label>
                    <textarea value={body} onChange={handleBodyChange} />
                </div>
                <button type="submit">Создать пост</button>
            </form>
        </div>
    );
};

export default PostForm;