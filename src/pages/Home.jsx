import React from "react";
import Header from "../components/Header";
import { FaTicketAlt, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Header />
      <section className="h-auto bg-white">
        <div className="max-w-7xl mx-auto py-4 px-10  sm:px-6 lg:px-8 sm:text-center ">
          <p className="mt-1 font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
            What do you need help with?
          </p>
          <p className="mt-5 mb-10 font-sans text-gray-900 sm:text-3xl sm:tracking-tight lg:text-2xl">
            Please choose an option from below
          </p>
          <div className="flex flex-col gap-7 h-screen items-stretch">
            <Link to="/new-ticket">
              {" "}
              <button className=" items-center w-3/4 rounded-md border border-transparent  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <FaQuestionCircle className="inline  mr-2 " />
                Submit a Ticket
              </button>
            </Link>
            <Link to="/tickets">
              {" "}
              <button className=" items-center w-3/4  rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <FaTicketAlt className="inline  mr-2" />
                View your Tickets
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
