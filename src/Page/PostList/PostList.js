import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function PostList() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => setPosts(resp.data))
    },[])
    return (
        <div>
            <h1>Post</h1>
            <ul className='post'>
                {posts.map(post =>
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                     </li> )}
            </ul>
        </div>
    );
}

export default PostList;