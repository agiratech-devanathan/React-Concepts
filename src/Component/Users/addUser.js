import React, { useState } from "react";
import Button from "../UI/Button/button";
import Card from "../UI/Card/card";
import ErrorModel from "../UI/ErrorModel/ErrorModel";
import classes from './addUser.module.css'

const AddUSer=(props)=>{
    const [enteredUserName,setEnteredUserName]=useState('');
    const [enteredUserAge,setEnteredUserAge]=useState('');
    const [error, setError]=useState();


    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title:'Invalid Input',
                message:'Please enter th valid input and not empty input'
            })
            return;
        }
        if(+enteredUserAge<1){
            setError({
                title:'Invalid Age',
                message:'Please enter th valid Age > 0'
            })
            return;
        }
     props.onAddUser(enteredUserName,  enteredUserAge)
     setEnteredUserName('');
     setEnteredUserAge('');
    }
    const userNameChangeHandler=(event)=>{
        setEnteredUserName(event.target.value)
    }
    const userAgeChangeHandler=(event)=>{
        setEnteredUserAge(event.target.value)
    }

    const errorHandler=()=>{
        setError(null)
    }

    return (
        <div>
            { error &&< ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
                <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type='text' value={enteredUserName} onChange={userNameChangeHandler}/>
            <label htmlFor="age">Age(year)</label >
            <input id="age" type='number' value={enteredUserAge} onChange={userAgeChangeHandler}/>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>

        </div>
    
    );
}



export default AddUSer;