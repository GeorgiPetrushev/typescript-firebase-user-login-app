import React from "react";
import styled from "styled-components";
import CreateTweet from "./CreateTweet";

const Tweet = () => {
  return (
    <StyleAddTweet>
      <CreateTweet />
    </StyleAddTweet>
  );
};

const StyleAddTweet = styled.div`
  background-color: rgb(32, 33, 36);
  min-height: 90vh;
  padding: 3rem 0;

  input {
    width: 20rem;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 1.5rem;
    resize: none;
    &:focus {
      background-color: rgb(28, 155, 238, 0.5);
      color: white;
    }
  }

  textarea {
    margin: 2rem 0;
    width: 30rem;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 1.5rem;
    resize: none;
    &:focus {
      background-color: rgb(28, 155, 238, 0.5);
      color: white;
    }
  }

  button {
    background-color: rgb(28, 155, 238);
    color: white;
    border-radius: 2rem;
    height: 5rem;
    width: 10rem;
    font-size: 1.7rem;
  }
  p {
    color: red;
  }
`;

export default Tweet;
