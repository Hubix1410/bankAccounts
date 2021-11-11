import { useState } from "react";

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


    if (users !== undefined) {
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
        <div>
            <h2>{usersMap}</h2>
            <h2>{accountsMap}</h2>
        </div>
    )
}