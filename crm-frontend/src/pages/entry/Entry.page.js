/**
 * Name: Entry.page.js
 * Author: Dave Pettit
 * Date: April 24, 2021
 * Purpose: UI for CRM login
 *  
 */

import React, { useState } from "react";

import { Jumbotron } from 'react-bootstrap';
import { LoginForm }from '../../components/login/Login.comp';
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import './entry.style.css';

export const Entry = () =>
{

const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("login")

const handleOnChange = (e) => {
    const { name, value } = e.target;
    
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    };

    const formSwitcher = frmType =>
    {
        setFrmLoad(frmType);
    }
    
    const handleOnSubmit = e =>
    {
        e.preventDefault()

        if (!email || !password)
        {
            return alert('Fill out all required information!')
        }
        
        //TODO: call api to submit form
        console.log(email, password);
    }

    const handleOnResetSubmit = (e) => {
      e.preventDefault();

      if (!email) {
        return alert("Please enter email");
      }

      //TODO: call api to submit form
      console.log(email);
    };

    return (
      <div className="entry-page bg-info">
        <Jumbotron className="form-box">
          {frmLoad === "login" && (
            <LoginForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              email={email}
              pass={password}
            />
          )}
          {frmLoad === "reset" && (
            <ResetPassword
              handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              email={email}
            />
          )}
        </Jumbotron>
      </div>
    );
};