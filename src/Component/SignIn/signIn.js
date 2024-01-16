import React, { useEffect, useState } from "react";
import './signIn.css'
import reactLogo from '../../logo.svg'
import FullWidthTextField from '../../Ui/TextField/textField'
import axios from "../../axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {


    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMassege, setErrorMessage] = useState('')


    const usernameHandler = (event) => {

        setUserName(event.target.value);
    }

    const passwoedHandler = (event) => {
        setPassword(event.target.value);
    }


    const handleClick = () => {

        if (userName === "" || password === "") {

            setErrorMessage("Enter UserName Or Password")
        }
        else {
            setErrorMessage('')
            axios.get("users").then(response => {
                console.log(response.data);

                if (response.status == "200") {
                    
                    navigate("/Home/")



                }
                // const data = {
                //     username: userName,
                //     password: password
                // }
                // axios.post("login",data).then(response=>{

                //     if(response.status=="200"){
                //         برود به صفحه ی بعدی
                //     }

                // })
            })
        }
    }

    return (
        <div className="SignInBox">
            <div className="Card">
                <div className="Logo">
                    <img src={reactLogo} alt="reactapp.ir logo" />

                </div>

                <FullWidthTextField usernameHandler={usernameHandler}
                    passwoedHandler={passwoedHandler} handleClick={handleClick}
                    userName={userName} password={password} errorMassege={errorMassege} />
            </div>


        </div>




    )
}

export default SignIn;