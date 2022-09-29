import './App.css';


import {postService} from "./services";
import {useState} from "react";
import {Posts, Users} from "./components";


function App() {

    const [posts, setPosts] = useState([]);

const getUserId = (userId) => {
        postService.getPosts(userId).then(({data})=>setPosts(data))
    }


  return (
    <div>
        <Users getUserId={getUserId}/>
        <Posts posts={posts}/>
    </div>
  );
}

export default App;
