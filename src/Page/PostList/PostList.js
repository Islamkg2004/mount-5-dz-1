import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Paginaiton from "../../components/Pagination/Paginaiton";

function PostList() {
    const  limit  = 10;
    const [offSet, SetOffset] = useState(1)
    const [posts, setPosts] = useState([])
    const page = Math.floor(offSet / limit) || 1;
    const  handleNext = () =>{
        SetOffset(prevState =>  prevState + limit)
    }
    const  handlePrev = () =>{
        if (offSet === 1) return
        SetOffset( prevState => prevState - limit)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offSet}`)
            .then(resp => setPosts(resp.data))

    },[offSet])
    return (
        <div>
            <h1>Post</h1>
            <ul className='post'>
                {posts.map(post =>
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>

                    </li>

                )}

            </ul>
            <Paginaiton
                handleNext={handleNext}
                handlePrev={handlePrev}
                page={page}
            />
        </div>
    );
}

export default PostList;