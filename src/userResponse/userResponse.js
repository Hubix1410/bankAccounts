import { useState } from "react";

export function UserResponse(){

    const [users, setUsers] = useState(undefined);


    if(users === undefined){
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }

    console.log(users);
    return(
        <h1>looo!</h1>
    )
}