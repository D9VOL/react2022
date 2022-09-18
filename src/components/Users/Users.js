import {useEffect, useState} from "react";

import {userService} from "../../services";
import User from "../User/User";

function Users (){

    const [users,setUsers] = useState([])
    const [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }


    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))

    },[])

    return(
        <div>
            <hr/>
            {user && <div> {user.id}. {user.username}  ----  {user.email}</div>  }
            <hr/>

            {
                users.map(user=><User key={user.id} user={user}  lift={lift}/>)
            }
        </div>
    );
}

export default Users;
    