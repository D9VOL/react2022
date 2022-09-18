function User (props){
    const {user,lift} = props;

    return(
        <div>
            {user.id} ----- {user.name}

           <div>
               <button onClick={() =>lift(user) }> Details </button>
           </div>


        </div>
    );
}

export default User;
