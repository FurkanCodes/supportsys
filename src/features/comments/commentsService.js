import axios from "axios";

const API_URL = "/api/tickets/";

// Get ticket comments
const getComments = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + ticketId + "/comments", config);

  return response.data;
};

const commentService = {
  getComments,
};

export default commentService;
