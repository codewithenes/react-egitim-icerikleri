import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllUsers} from "./redux/userSlice"


function UserList() {
    const dispatch = useDispatch();

    const {users} = useSelector(store => store.user)
    

    useEffect(()=>{
        dispatch(getAllUsers())
    }, [])
  return (
    <>
     <div>userList</div>

    {users && users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                     
                        <li key={user.id}>
                             {user.id} ----
                            {user.name} 
                           
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading users or no users found...</p>
            )}
        
    </>
   
  )
}

export default UserList