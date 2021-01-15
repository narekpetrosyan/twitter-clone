import axios from "axios";

export const tagsApi = {
  fetchTags() {
    return axios
      .get("https://my-json-server.typicode.com/narekpetrosyan/rest.api/themes")
      .then(({ data }) => data);
  },
};
