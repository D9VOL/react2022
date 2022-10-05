import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPages, PostsPage, UsersPages} from "./pages";
import {PostDetailPage} from "./pages/PostDetailPage/PostDetailPage";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'home'}/>}/>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'users'} element={<UsersPages/>}/>
            <Route path={'posts'} element={<PostsPage/>}>
                <Route path={':id'} element={<PostDetailPage/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
        </Route>
            <Route path={'*'} element={<NotFoundPages/>}/>
      </Routes>

  );
}

export default App;
