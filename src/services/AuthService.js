import axios from "axios";

const AuthService = async ({ username, password }) => {
  const apiUrl = import.meta.env.VITE_MOCK_USERS_API_URL;

  try {
    const response = await axios.get(apiUrl, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    const user = response.data.find(
      (user) => user.name === username && user.password === password
    );

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default AuthService;
