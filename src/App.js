import React, { useState } from 'react';
import AppUSer from './Component/Users/addUser'
import UserList from './Component/Users/UserList';

function App() {
  const [usersList,setUserList]=useState([]);
  const addUserHandler=(uName,uAge)=>{
setUserList((prevUsersList)=>{
  return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
})
  }
  return (
    <React.Fragment>
      <AppUSer onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
