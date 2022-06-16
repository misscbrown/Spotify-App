import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { useNavigate } from "react-router-dom";

import Auth from "../utils/auth";
import Dashboard from "../pages/Dashboard";


const LoginForm = () => {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_USER);
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
    const form = event.currentTarget;

    if (form.checkValidity()) {
      try {
        const { data } = await login({
          variables: { ...userFormData },
        });

        Auth.login(data.login.token);

        navigate("/dashboard");
      } catch (e) {
        console.error(e);
        setShowAlert(true);
      }
      setUserFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <main className="flex-row justify-center mb-4">                      
      <div className="relative py-16
        before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-black">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
          <div class="p-6 sm:p-16"><h2 class="mb-8 text-2xl text-cyan-900 font-bold">Login in to your account</h2>
        <div className="">
          <div className="card-body">
                  <form className="space-y-8" onSubmit={handleFormSubmit}>
                   
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
                className="form-input"
                placeholder="password"
                name="password"
                type="password"
                value={setUserFormData.password}
                onChange={handleInputChange}
                class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                focus:ring-2 focus:ring-sky-300 focus:outline-none
                invalid:ring-2 invalid:ring-red-400"
              />
              <button
                className="btn btn-block btn-primary"
                style={{ cursor: "pointer" }}
                type="submit"
                class="w-full py-3 px-6 rounded-md bg-green-500
               focus:bg-sky-700 active:bg-sky-500">
                <span class="text-white">Continue</span>
                </button>
                <p class="border-t pt-6 text-sm">
                Don't have an account?  
                <a href="#" class="text-sky-500"> Sign up</a>
                </p>     
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

export default LoginForm;
