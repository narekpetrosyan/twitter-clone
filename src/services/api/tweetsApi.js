import axios from "axios";

export const tweetsApi = {
  fetchTweets() {
    return axios.get("http://localhost:3001/tweets").then(({ data }) => data);
  },
  addTweets(payload) {
    return axios
      .post("http://localhost:3001/tweets", payload)
      .then(({ data }) => data);
  },
  fetchTweetData(id) {
    return axios
      .get("http://localhost:3001/tweets?_id=" + id)
      .then(({ data }) => data);
  },
};
