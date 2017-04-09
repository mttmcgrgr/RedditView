const baseUrl = "https://www.reddit.com/";
const jsonPostfix = "/.json";


export const fetchPosts = (tab) => (
  fetch(baseUrl+ tab + jsonPostfix)
  .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.data.children;
      })
      .catch((error) => {
        console.error(error);
      })
  );
