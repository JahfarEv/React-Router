import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="regi">
      <h1>Registration</h1>
      <form className="rgtr">
        <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputFirstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputFirstName"
              placeholder="First Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputLastName"
              placeholder="Last Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
             <label for="inputPassword4">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
             <option>Kerala</option>
              <option>Tamilnadu</option>
              <option>Karnatka</option>
            </select>
          </div>
          
        </div>
        <div className="signup">
        <Link to="/login">
          <button type="submit" class="btn1 btn1-primary">
            Sign up
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
