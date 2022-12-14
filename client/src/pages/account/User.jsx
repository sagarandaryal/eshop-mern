import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

axios.defaults.withCredentials = true;

const User = () => {
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/getUser",
        {
          withCredentials: true,
        }
      );
      const data = await response.data;
      setUser((prev) => ({ ...prev, data }));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  useEffect(() => {
    getUser();
  }, []);

  return <div>{user && <h1>Welcome {user.data.user.firstname}</h1>}</div>;
};

export default User;
