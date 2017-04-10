const baseUrl = "https://www.reddit.com/";

export const fetchPosts = (tab) => (
  fetch(baseUrl + tab + "/.json")
  .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.data.children;
      })
      .catch((error) => {
        console.error(error);
      })
  );
