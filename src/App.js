import { UserMenu } from './userMenu/UserMenu';
import { UserResponse } from './userResponse/userResponse';
import "./main.scss";

export function App() {

    return (
        <div className="container">
            <UserMenu />
            <UserResponse />
        </div>
    )
}