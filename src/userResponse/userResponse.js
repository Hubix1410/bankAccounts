import { useState } from "react";
import "./userResponse.scss";

export function UserResponse({ currentUser, setCurrentUser }) {

    const [users, setUsers] = useState(undefined);
    let usersMap;

    function changeBalance(index){
        return true;
    }

    function deleteAccount(index){
        
    }

    if (currentUser !== undefined) {
        if(currentUser === "all"){
            fetch("http://localhost:3000/bank-accounts-full")
            .then(response => response.json())
            .then(data => setUsers(data));
        setCurrentUser(undefined);
        }
        else{
            fetch("http://localhost:3000/bank-accounts-full?id=" + currentUser)
            .then(response => response.json())
            .then(data => setUsers(data));
        setCurrentUser(undefined);
        }
    }

    if (users !== undefined) {
        console.log(users);
        if (users.length === 0) {
            usersMap = <p className="wrongID">Wrong ID</p>
        } else if(users.length === 1)  {
            usersMap = users.map((element, index) =>
                <div key={index} className="account">
                    <ul>
                        <li className="name">Name: {element.name} {element.lastName}</li>
                        <li className="email">Email: {element.email}</li>
                        <img src={`/imgs/face-${element.imageId}.jpg`} alt="img"/>
                        <li className="accountType">Account type: {element.type}</li>
                        <li className="balance">Balance: <span>{element.balance} zł</span></li>
                    </ul>
                </div>
            );    
        } else {
            usersMap = users.map((element, index) =>
            <div key={index} className="accountSmall">
                <ul>
                    <li className="name">Name: {element.name} {element.lastName}</li>
                    <li className="email">Email: {element.email}</li>
                    <img src={`/imgs/face-${element.imageId}.jpg`} alt="img"/>
                    <li className="accountType">Account type: {element.type}</li>
                    <li className="balance">Balance: <span>{element.balance} zł</span></li>
                    <li>
                        <button className="accountButton" onClick={changeBalance(index)}> Change balance </button>
                        <br/>
                        <button className="accountButton" onClick={deleteAccount(index)}> Delete account </button>
                    </li>
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