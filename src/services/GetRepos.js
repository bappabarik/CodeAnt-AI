import axios from "axios";

const GetRepos = async (userId) => {
  const apiUrl = import.meta.env.VITE_MOCK_REPOS_API_URL;
  try {
    const response = await axios.get(apiUrl, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    const repos = response.data.filter((repo) => repo.userId === userId);
    return repos;
  } catch (error) {
    console.log("ERROR:: GETREPOS METHOD", error);
    return null;
  }
};

export default GetRepos;
