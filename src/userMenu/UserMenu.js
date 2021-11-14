import "./userMenu.scss";

export function UserMenu(){
    return(
        <div className="menuDiv">
            <h1>Bank Accounts</h1>
            <p>Account ID: <input type="number" className="specificAccount"/></p>
        </div>
    )
}