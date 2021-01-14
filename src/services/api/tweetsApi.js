import axios from "axios";

export const tweetsApi = {
  fetchTweets() {
    return axios
      .get("https://my-json-server.typicode.com/narekpetrosyan/rest.api/tweets")
      .then(({ data }) => data);
  },
};
