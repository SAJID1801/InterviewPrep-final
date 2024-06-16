import React from "react";
import "../styles/cscore.css";
import { FaArrowRight } from "react-icons/fa";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const CSCoreSubjects = () => {
  return (
    <div>
      <Nav />
      <main>
        <h1 className="heading-core">Top Interview Questions</h1>
        <div class="upper-core">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1642176849879-92f85770f212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="card-content">
              <h2 className=" text-xl">Operating System</h2>
              <p>Asked by Faang, investment banks, startups and others..</p>
              <div className="flex space-x-2 items-center">
                <Link to="/top-interview-questions/os">Explore OS</Link>
                <FaArrowRight color="white" size={25} />
              </div>
            </div>
          </div>

          <div class="card">
            <img
              src="https://plus.unsplash.com/premium_photo-1682145174729-52ebed03f4b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="card-content">
              <h2 className=" text-xl">DataBase Management</h2>
              <p>
                Asked by multiple investment banks, Faang, Startups and others..
              </p>
              <Link to="/top-interview-questions/dbms">Explore DBMS</Link>
            </div>
          </div>

          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="card-content">
              <h2 className=" text-xl">Computer Network</h2>
              <p>
                Asked by Faang, network & security based companies and others..
              </p>
              <Link to="/top-interview-questions/cn">Explore CN</Link>
            </div>
          </div>
        </div>

        <div class="lower-core">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="card-content">
              <h2 className=" text-xl">OOPS</h2>
              <p>Asked by Faang, investment bank, startups and others..</p>
              <Link to="/top-interview-questions/oops">Explore OOPS</Link>
            </div>
          </div>

          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="card-content">
              <h2 className=" text-xl">DS & Algo</h2>

              <p>Asked by all Product Based companies</p>
              <Link to="/top-interview-questions/dsa">Explore DSA</Link>
            </div>
          </div>

          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1622549037543-49cf1ca0babc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="card-content">
              <h2 className=" text-xl">SQL(RDMS)</h2>
              <p>Asked by Faang, investment bank and startups and others..</p>
              <Link to="/top-interview-questions/sql">Explore SQL</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CSCoreSubjects;
