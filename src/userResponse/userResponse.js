import { useState } from "react";
import "./userResponse.scss";

export function UserResponse() {

    const [users, setUsers] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    let accountsMap;
    let usersMap;

    if (users === undefined) {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }

    if (accounts === undefined) {
        fetch("http://localhost:3000/bank-accounts")
            .then(response => response.json())
            .then(data => setAccounts(data));
    }

    if (users !== undefined) {
        usersMap = users.map((element, index) =>
            <div key={index}>
                <ul>
                    <li>Email: {element.email}</li>
                </ul>
            </div>
        );
    }


    if (accounts !== undefined) {
        accountsMap = accounts.map((element, index) =>
            <div key={index}>
                <ul>
                    <li>Type: {element.type}</li>
                    <li>Balance: {element.balance} zł</li>
                </ul>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="emailDiv">{usersMap}</div>
            <div className="accountDiv">{accountsMap}</div>
        </div>
    )
}