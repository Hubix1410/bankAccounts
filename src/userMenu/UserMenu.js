import "./userMenu.scss";

export function UserMenu({ currentUser, setCurrentUser }) {

    function setUserID(element) {
        setCurrentUser(element.target.value);
    }

    function showAllAccounts(){
        setCurrentUser("all");
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

            <button onClick={showAllAccounts} className="allAccounts">Show all accounts</button>

        </div>
    )
}