import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { CiWarning } from "react-icons/ci";

const QuestionList = () => {
  const { rating } = useParams();
  const [problemList, setProblemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [solvedQuestions, setSolvedQuestions] = useState([]);

  useEffect(() => {
    const getProblemList = async () => {
      //check user is logged in or not
      if (localStorage.getItem("email") !== null) {
        setIsLogin(true);
      }
      try {
        const data = {
          email: localStorage.getItem("email"),
          rating: rating,
        };
        const url = "http://localhost:3001/documents";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(data), // Convert the data object to a JSON string
        });

        const jsonData = await response.json();
        if (jsonData) {
          localStorage.setItem("rating", rating);
          setSolvedQuestions(jsonData.solvedQuestions);
          setProblemList(jsonData.questionsList);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProblemList();
  }, [rating]);

  const changeQuestionStatus = async (e, id) => {
    if (e === "add") {
      try {
        const data = {
          email: localStorage.getItem("email"),
          questionId: id,
        };
        const url = "http://localhost:3001/update-completed-questions";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(data), // Convert the data object to a JSON string
        });

        const jsonData = await response.json();
        setSolvedQuestions(jsonData);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const newQes = solvedQuestions.filter((item) => item !== id);
        setSolvedQuestions(newQes);
        const data = {
          email: localStorage.getItem("email"),
          questionId: id,
        };
        const url = "http://localhost:3001/remove-completed-questions";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(data), // Convert the data object to a JSON string
        });

        const jsonData = await response.json();
        setSolvedQuestions(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Nav />
      <div className=" max-w-4xl mx-auto">
        <h1 className="text-[#004b3c] text-2xl font-semibold pb-6 py-8">
          <span className="border-b-4 border-emerald-500">Questions List</span>
        </h1>
        {!isLogin && (
          <div className=" bg-red-100 p-2 mb-5 flex items-center space-x-2 border border-gray-300 rounded">
            <div className="font-semibold">
              <CiWarning size={18} />
            </div>
            <div className=" font-semibold text-sm">
              Currently you are not logged in, If you want to track progress
              please login or signup.
            </div>
          </div>
        )}
        <div className={`flex border py-2  bg-green-200 font-semibold`}>
          <p className=" w-20 ml-8">S. No.</p>
          <p className=" w-96 mx-4 mr-28">Problem Name</p>
          <p className=" w-28">Problem Link</p>

          <div>
            <p className=" w-24 ml-8">Status</p>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div>Loading....</div>
          ) : (
            <div>
              {problemList &&
                problemList.map((item, index) => {
                  return (
                    <div
                      className={`flex border py-2 ${
                        index % 2 ? " bg-slate-50" : ""
                      }`}
                      key={index}
                    >
                      <p className=" w-20 ml-8">{index + 1}</p>
                      <p className=" w-96 mx-4 mr-28">{item.name}</p>
                      <a
                        href={item.link}
                        target="blank"
                        className=" w-28 hover:text-blue-800"
                      >
                        Problem Link
                      </a>

                      <div>
                        {solvedQuestions.includes(item._id) ? (
                          <input
                            className=" w-24"
                            type="checkbox"
                            checked={true}
                            onChange={() =>
                              changeQuestionStatus("remove", item._id)
                            }
                          />
                        ) : (
                          <input
                            className="w-24"
                            type="checkbox"
                            onChange={() =>
                              changeQuestionStatus("add", item._id)
                            }
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionList;
