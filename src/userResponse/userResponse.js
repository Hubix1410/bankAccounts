import { useState } from "react";
import "./userResponse.scss";

export function UserResponse({ currentUser, setCurrentUser }) {

    const [users, setUsers] = useState(undefined);
    let usersMap;

    if (currentUser !== undefined) {
        fetch("http://localhost:3000/bank-accounts-full?id=" + currentUser)
            .then(response => response.json())
            .then(data => setUsers(data));
        setCurrentUser(undefined);
    }

    if (users !== undefined) {
        console.log(users);
        if (users.length === 0) {
            usersMap = <p className="wrongID">Wrong ID</p>
        } else {
            usersMap = users.map((element, index) =>
                <div key={index} className="account">
                    <ul>
                        <li>{element.name} {element.lastName}</li>
                        <li>email: {element.email}</li>
                        <li>Type: {element.type}</li>
                        <li>Balance: {element.balance} zł</li>
                    </ul>
                </div>
            );
        }
    }

    return (
        <div className="accountDisplay">
            {usersMap}
        </div>
    )
}