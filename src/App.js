import './App.css';
import {Routes, Route} from "react-router-dom";
import About from "./Page/About/About";
import PostList from "./Page/PostList/PostList";
import Layout from "./components/Layout/Layout";
import SinglePost from "./Page/SinglePost/SinglePost";
import PostForm from "./Page/PostForm/PostForm";
function App() {
  return (
    <>

      <Routes>
         <Route path='/' element={<Layout/>}>
             <Route path='about' element={<About/>}/>
             <Route path='post' element={<PostList/>}/>
             <Route path='posts/:id' element={<SinglePost/>}/>
             <Route path="/post-form" element={<PostForm/>} />
         </Route>
      </Routes>
    </>
  );
}

export default App;
