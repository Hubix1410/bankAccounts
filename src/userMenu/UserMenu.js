import "./userMenu.scss";

export function UserMenu({ currentUser, setCurrentUser }) {

    function setUserID(element) {
        setCurrentUser(element.target.value);
    }

    return (
        <div className="menuDiv">
            <h1><span>Bank</span> Accounts</h1>
            <p>Account ID:
                <input
                    onChange={setUserID}
                    value={currentUser}
                    type="number"
                    className="specificAccount"
                />
            </p>

        </div>
    )
}