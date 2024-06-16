import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [getError, setGetError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (email.length !== 0 && password.length !== 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [email, password]);

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };
    const url = "http://localhost:3001/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert the data object to a JSON string
      });

      if (!response.ok) {
        const error = await response.json();
        setGetError(error);
        throw new Error("Network response was not ok");
      } else {
        const result = await response.json(); // Parse the JSON response
        localStorage.setItem("email", result.email);
        localStorage.setItem("rating", result.rating);
        navigate("/");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <>
      <Nav />
      <div className="w-full h-screen">
        <div className="max-w-96 border my-auto mx-auto border-gray-200 rounded p-3 mt-24">
          <div className="w-full">
            <h1 className="text-center font-semibold text-xl">Log in</h1>
            {getError && (
              <div className="border bg-red-100 px-2 py-1 w-full rounded text-sm mt-4">
                {getError.message}
              </div>
            )}
            <div className="pt-6">
              <div className="flex justify-between text-gray-500 text-sm">
                <label className="" for="email">
                  Email
                </label>
                <p>
                  Need an account?{" "}
                  <Link to="/signup" className="text-[#0d960d] no-underline">
                    <span className="text-blue-400 text-sm">Sign up</span>
                  </Link>
                </p>
              </div>
              <div className="pt-1">
                <input
                  className="rounded border px-2 py-1 border-gray-200 w-full outline-none"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email.length === 0 && (
                  <p className="text-red-500 text-sm">*Required field</p>
                )}
              </div>
            </div>
            <div className="pt-6">
              <label for="password" className=" text-gray-500 text-sm">
                Password
              </label>
              <br />
              <div className="pt-1">
                <input
                  className="rounded border px-2 py-1 border-gray-200 w-full outline-none"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password.length === 0 && (
                  <p className="text-red-500 text-sm">*Required field</p>
                )}
              </div>
            </div>

            <div className="pt-4 flex items-center">
              <input type="checkbox" />
              <span className="ml-1 text-sm">Remind me</span>
            </div>

            <div className="w-full pt-6">
              <button
                className={`w-full py-1 rounded text-white text-center ${
                  isDisable ? "bg-emerald-300" : "bg-emerald-600"
                }`}
                disabled={isDisable}
                onClick={() => handleLogin()}
              >
                Log in
              </button>
              <a
                href="#"
                className="flex justify-center no-underline text-blue-400 text-sm"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
