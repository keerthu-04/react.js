import React from "react";
import {useState} from 'react';
function LogIn(props) {
  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  return (
    
    <div className="Auth-form-container">
      <h1>PHARMACY MANAGEMENT</h1>
      <form className="Auth-form">
    
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">LOGIN</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="email address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default LogIn;