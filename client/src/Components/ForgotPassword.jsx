import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const ForgotPassword = () => {
   const [email, setEmail] = useState("");

   const navigate = useNavigate();

    const handleSubmit = (e) => {
     e.preventDefault();
     Axios.post("http://localhost:3000/auth/forgot-password", {
       email,
     })
       .then((responce) => {
         if (responce.data.status) {
           alert("check your email for reset password link")
           navigate("/login");
         }
       })
       .catch((err) => {
         console.log(err);
       });
    };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
     
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send</button>
        <p>
          Have an Account ? <Link to="/login"> Login </Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword