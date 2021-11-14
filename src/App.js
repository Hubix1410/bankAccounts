import { UserMenu } from './userMenu/UserMenu';
import { UserResponse } from './userResponse/userResponse';
import "./main.scss";
import { useState } from 'react';

export function App() {

    const [currentUser, setCurrentUser] = useState(undefined);

    return (
        <div className="container">
            <UserMenu currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <UserResponse currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
    )
}