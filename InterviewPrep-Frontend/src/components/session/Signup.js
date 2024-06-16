import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [isPasswordMatching, setIsPasswordMatching] = useState(true);
  const [getError, setGetError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      password.length !== 0 &&
      confirmPassword.length !== 0
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }

    //check password
    if (password === confirmPassword) {
      setIsPasswordMatching(true);
      setIsDisable(false);
    } else {
      setIsPasswordMatching(false);
      setIsDisable(true);
    }
  }, [name, email, password, confirmPassword]);

  const handleSignup = async () => {
    const data = {
      name,
      email,
      password,
    };
    const url = "http://localhost:3001/signup";
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
      }

      const result = await response.json(); // Parse the JSON response
      localStorage.setItem("email", result.email);
      navigate("/");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <>
      <Nav />
      <div className="w-full h-screen">
        <div className="max-w-96 border my-auto mx-auto border-gray-200 rounded p-3 mt-6">
          <h1 className="text-center font-semibold text-xl">Signup</h1>
          {getError && (
            <div className="border bg-red-100 px-2 py-1 w-full rounded text-sm mt-4">
              {getError.message}
            </div>
          )}
          <div className="w-full">
            <div className="pt-5">
              <label className=" text-gray-500 text-sm">Name</label>
              <br />
              <div className="pt-1">
                <input
                  className="rounded border px-2 py-1 border-gray-200 w-full outline-none"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {name.length === 0 && (
                  <p className="text-red-500 text-sm">*Required field</p>
                )}
              </div>
            </div>

            <div className="pt-5">
              <div className="text-gray-500 text-sm">
                <label className="">Email</label>
              </div>
              <div className="pt-1">
                <input
                  className="rounded border px-2 py-1 border-gray-200 w-full outline-none"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {email.length === 0 && (
                  <p className="text-red-500 text-sm">*Required field</p>
                )}
              </div>
            </div>

            <div className="pt-5">
              <label className=" text-gray-500 text-sm">Password</label>
              <br />
              <div className="pt-1">
                <input
                  className="rounded border px-2 py-1 border-gray-200 w-full outline-none"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {password.length === 0 && (
                  <p className="text-red-500 text-sm">*Required field</p>
                )}
              </div>
            </div>

            <div className="pt-5">
              <label className=" text-gray-500 text-sm">Confirm Password</label>
              <br />
              <div className="pt-1">
                <input
                  className="rounded border px-2 py-1 border-gray-200 w-full outline-none"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {!isPasswordMatching && (
                  <p className="text-red-500 text-sm">
                    password is not matching
                  </p>
                )}
              </div>
            </div>

            <div className="pt-4 flex items-center">
              <input type="checkbox" />
              <span className="ml-1 text-sm">Remind me</span>
            </div>

            <div className="w-full pt-6">
              <button
                onClick={(e) => handleSignup(e)}
                type="submit"
                className={`w-full py-1 rounded text-white text-center ${
                  isDisable ? "bg-emerald-300" : "bg-emerald-600"
                }`}
                disabled={isDisable}
              >
                Signup
              </button>
              <a
                href="#"
                className="flex justify-center no-underline text-blue-400 text-sm pt-1"
              >
                <Link
                  to="/login"
                  className="flex justify-center no-underline text-blue-400 text-sm pt-1"
                >
                  Already have an account?
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
