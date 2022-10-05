
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {AlbumsPages, CommentsPage, TodosPages} from "./pages";
import {Posts} from "./components";


function App() {
    return (
        <div>
            


            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'albums'} element={<AlbumsPages/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<Posts/>}/>

                    </Route>

                    <Route path={'todos'} element={<TodosPages/>}/>

                </Route>
            </Routes>

        </div>);
}

export default App;
