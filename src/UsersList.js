import React, {useState, useEffect} from 'react';

const API_URL = `${process.env.REACT_APP_API_URL}users/1`

const UsersList = function(){
   
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch(API_URL)
            .then(response => response.json())
            .then(json => {
                setUsers(json)
                console.log(json)
            })
        }

        fetchData();
    }, [])

    return (
        <div>
            {JSON.stringify(users)}
        </div>

    )
}

export default UsersList

