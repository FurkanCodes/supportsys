import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import { getComments, reset } from "../features/comments/commentsSlice";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { toast } from "react-toastify";
import CommentItem from "../components/CommentItem";
function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const { comments, isLoading: commentsIsLoading } = useSelector(
    (state) => state.comments
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    dispatch(getComments(ticketId));
  }, [isError, message, ticketId]);

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("ticket closed");
    navigate("/tickets");
  };
  if (isLoading || commentsIsLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <h3>Something wrong</h3>;
  }

  return (
    <div className="container w-2/4 ml-auto mr-auto">
      <header>
        <BackButton url="/tickets" />
        <div className="flow-root">
          <h2 className="float-left mt-4 font-bold">Ticket ID: {ticket._id}</h2>

          <span
            className={`float-right font-bold px-6 py-4 ${
              ticket.status === "open"
                ? " text-white  bg-green-500"
                : " text-gray-100 bg-red-600"
            }`}
          >
            {ticket.status}
          </span>
        </div>
        <div className="container">
          <div className="">
            <h3 className="font-bold text-1xl">
              Date Submitted:{" "}
              {new Date(ticket.createdAt).toLocaleString("tr-TR")}
            </h3>
          </div>
          <hr />

          <div className="mt-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <h3 className="mb-5 text-2xl font-bold">
              Description of the issue
            </h3>
            <p>{ticket.description}</p>
          </div>
        </div>
      </header>

      <div>
        {ticket.status === "open" ? (
          <button
            className="w-full px-4 py-2 my-4 font-bold text-white bg-red-500 border-b-4 border-red-700 rounded hover:bg-red-400 hover:border-red-500"
            onClick={onTicketClose}
          >
            close ticket
          </button>
        ) : (
          <button
            disabled
            className="w-full px-4 py-2 my-4 font-bold text-white bg-red-500 border-b-4 border-red-700 rounded cursor-not-allowed"
            onClick={onTicketClose}
          >
            <h2>ticket already closed</h2>
          </button>
        )}
        <h2 className="mt-8 text-3xl font-bold">Comments</h2>

        {comments.length <= 0 && <h2>no comments</h2>}
        {comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Ticket;
