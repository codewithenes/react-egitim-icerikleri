import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    const users = response.data[0];
    console.log(users);
  };
  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    return response.data.postId;
  };

  const createUser = async (newUser) => {
    const response = await axios.post(BASE_URL + "/users", newUser);
    console.log(response);
  };

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(
      BASE_URL + "/users/" + userId,
      updatedUser
    );
    console.log(response.data.username);
  };
  const deleteUserById = async (userId) => {
    const deleteduser = await axios.delete(BASE_URL + "/users/" + userId);
    console.log(deleteduser);
  };

  const getPostById = async (postId) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserById(1);
    const responseLast = await getPostById(postId);
    console.log(responseLast);
  };

  useEffect(() => {
    getPost();
  });

  return (
    <>
      <p>hello</p>
    </>
  );
}

export default App;
