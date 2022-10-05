import {Outlet} from "react-router-dom";

import {Posts} from "../../components";

const PostsPage = () => {

    return (
        <div style={{display:'flex'}}>
            <div>
                <Posts/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export {
    PostsPage
};
    