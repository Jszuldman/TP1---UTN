import React, { useState } from "react";
import "./Register.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create an account</h2>
        <p>Enter your information to register</p>

        <form>
          <div className="inline-fields">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="John" />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john.doe@example.com" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="+1 (555) 000-0000" />
          </div>

          <div className="form-group password-container">
            <label>Password</label>
            <div className="input-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
              />
              <span 
                className="eye-icon" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>

          <div className="form-group password-container">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm your password" 
              />
              <span 
                className="eye-icon" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div>

          <button className="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
