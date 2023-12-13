import React from "react"
import {useState} from 'react';
import './Auth.css'
export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  return (
    <div className="Auth-form-container">
      <h1>PHARMACY MANAGEMENT</h1>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">SIGN UP</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="enter your name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="email address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Create Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="use special characters"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="repeat password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
}