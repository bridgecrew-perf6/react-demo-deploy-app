import React, {useState} from 'react';

const API_URL = `${process.env.REACT_APP_API_URL}users/1`

const UsersList = function(){
   
    const [users, setUsers] = useState([]);

    fetch(API_URL)
    .then(response => response.json())
    .then(json => {
        setUsers(json)
        console.log(json)
    })

    return (
        <div>
            {JSON.stringify(users)}
        </div>

    )
}

export default UsersList

