import React, { useEffect, useState } from "react";
import GithubUsers from "./github/GithubUsers";
import Loading from "./github/Loading";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      console.log(response);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <GithubUsers users={users} />
    </>
  );
};

export default UseEffectAPI;
