import React from 'react';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/about'}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/post'}>
                            Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/post-form'} >
                            Создание Поста
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>

            <footer>
                <ul>
                    <li>Geek</li>
                    <li>politax</li>
                    <li>Kut bilim    </li>
                </ul>
            </footer>
        </>
    );
}

export default Layout;