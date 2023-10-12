import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="box">
      <form className="container">
        <h1>Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <Link to="/home">
          <button type="submit" class="btn btn-light">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
