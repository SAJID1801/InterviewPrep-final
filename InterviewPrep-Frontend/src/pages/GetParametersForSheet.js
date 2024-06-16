import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetParametersForSheet = () => {
  const navigate = useNavigate();
  const [parameterInput, setParameterInput] = useState([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    const getRating = localStorage.getItem("rating");
    if (getRating !== null && getRating !== "null") {
      navigate(`/questions-list/${getRating}`);
    }
  }, []);

  const parameterList = [
    {
      ques: "How many questions have you done?",
    },
    {
      ques: "What difficulty do you face in solving easy questions of Leetcode?(0-10)",
    },
    {
      ques: "What difficulty do you face in solving medium questions of Leetcode?(0-10)",
    },
    {
      ques: "What difficulty do you face in solving hard questions of Leetcode?(0-10)",
    },
    {
      ques: "Package you are targeting?(In LPA)",
    },
    {
      ques: "What is your highest contest rating on Codechef?",
    },
    {
      ques: "What is your highest contest rating on Leetcode?",
    },
    {
      ques: "How consistent are you?(0-10)",
    },
  ];

  const getCodeChefRating = (value) => {
    if (value === 0) {
      return 0;
    } else if (value <= 1400) {
      return 2;
    } else if (value <= 1599) {
      return 3.5;
    } else if (value <= 1799) {
      return 6;
    } else {
      return 8.5;
    }
  };

  const getLeetcodeRating = (value) => {
    if (value === 0) {
      return 0;
    } else if (value <= 1500) {
      return 2;
    } else if (value <= 1650) {
      return 3.5;
    } else if (value <= 1850) {
      return 5.5;
    } else {
      return 8;
    }
  };
  const getQuestinSolvedRating = (value) => {
    if (value <= 100) {
      return 1.5;
    } else if (value <= 250) {
      return 3.5;
    } else if (value <= 500) {
      return 5.5;
    } else {
      return 8;
    }
  };
  const getPackageRating = (value) => {
    if (value <= 10) {
      return 2.5;
    } else if (value <= 25) {
      return 5.5;
    } else {
      return 8;
    }
  };

  const setValue = (getValue, index) => {
    //convert string value to number
    const value = Number(getValue);

    //set codechef rating
    if (index === 5) {
      const rating = getCodeChefRating(value);
      parameterInput[index] = rating;
      return;
    }

    //set leetcode rating
    else if (index === 6) {
      const rating = getLeetcodeRating(value);
      parameterInput[index] = rating;
      return;
    }

    //set number of Questions solved
    else if (index === 0) {
      const rating = getQuestinSolvedRating(value);
      parameterInput[index] = rating;
      return;
    }

    // set Package rating
    else if (index === 4) {
      const rating = getPackageRating(value);
      parameterInput[index] = rating;
      return;
    }
    parameterInput[index] = value;
    console.log(parameterInput);
  };

  const calculateRating = () => {
    const filteredNumbers = parameterInput.filter((number) => number !== 0);

    // Step 2: Calculate the sum of the filtered array
    const sum = filteredNumbers.reduce((acc, number) => acc + number, 0);

    // Step 3: Calculate the average
    const average = sum / filteredNumbers.length;
    console.log(average);

    navigate(`/questions-list/${average}`);
  };

  return (
    <div className=" max-w-3xl mx-auto py-6">
      <div className="container">
        {parameterList.map((item, index) => {
          return (
            <div key={index} className="pt-5 flex flex-col space-y-2">
              <label className="pt-1">
                Q.{index + 1} {item.ques}
              </label>
              <input
                className="rounded border px-2 py-1 border-gray-200 w-full outline-none"
                type="number"
                onChange={(e) => setValue(e.target.value, index)}
                required
              />
            </div>
          );
        })}
        <div className="w-full pt-6">
          <button
            onClick={() => calculateRating()}
            className=" w-full py-1 rounded bg-emerald-400 text-white text-center"
          >
            Generate List
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetParametersForSheet;
