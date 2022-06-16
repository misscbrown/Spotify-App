import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity()) {
      try {
        const { data } = await addUser({
          variables: { ...userFormData },
        });

        Auth.login(data.addUser.token);

        navigate("/dashboard");
      } catch (e) {
        console.error(e);
      }

      setUserFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <main className="flex-row justify-center mb-4">                      
      <div className="relative py-16
        before:absolute before:inset-0 before:w-full before:h-[70%] before:bg-black">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
          <div class="p-6 sm:p-16"><h2 class="mb-8 text-2xl text-green-500 font-bold">Create a new account</h2>
          <div className="">
            <div className="card-body">
            <form className="space-y-8" onSubmit={handleFormSubmit}>
              <input
                className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                focus:ring-2 focus:ring-sky-300 focus:outline-none
                invalid:ring-2 invalid:ring-red-400"
                placeholder="Your username"
                name="username"
                type="text"
                value={setUserFormData.username}
                onChange={handleInputChange}
              />
              <input
                className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                focus:ring-2 focus:ring-sky-300 focus:outline-none
                invalid:ring-2 invalid:ring-red-400"
                placeholder="Your email"
                name="email"
                type="email"
                value={setUserFormData.email}
                onChange={handleInputChange}
              />
              <input
                className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                focus:ring-2 focus:ring-sky-300 focus:outline-none
                invalid:ring-2 invalid:ring-red-400"
                placeholder="Password"
                name="password"
                type="password"
                value={setUserFormData.password}
                onChange={handleInputChange}
              />
              <button
                className="submit-btn btn-block btn-primary"
                style={{ cursor: "pointer" }}
                type="submit"
                class="w-full py-3 px-6 rounded-md bg-green-500
               focus:bg-sky-700 active:bg-sky-500">
                <span class="text-white">Continue</span>       
                </button>
                Already have an account?  
                <a href="#" class="text-sky-500"> Login</a>
            </form>

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
            
    </main>
  );
};

export default SignupForm;
