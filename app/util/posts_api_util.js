const baseUrl = "https://www.reddit.com/";

export const fetchPosts = (tab) => (
  fetch(baseUrl + tab + '/.json?limit=20', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.data.children;
      })
      .catch((error) => {
        console.error(error);
      })
  );
