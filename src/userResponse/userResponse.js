import { useState } from "react";
import "./userResponse.scss";

export function UserResponse() {

    const [users, setUsers] = useState(undefined);
    let usersMap;

    if (users === undefined) {
        fetch("http://localhost:3000/bank-accounts-full")
            .then(response => response.json())
            .then(data => setUsers(data));
    }


    if (users !== undefined) {
        usersMap = users.map((element, index) =>
            <div key={index} className="accountSmall">
                <ul>
                    <li>{element.name} {element.lastName}</li>
                    <li>email: {element.email}</li>
                    <li>Type: {element.type}</li>
                    <li>Balance: {element.balance} zł</li>
                </ul>
            </div>
        );
    }

    return (
        <div className="accountDisplay">
            {usersMap}
        </div>
    )
}