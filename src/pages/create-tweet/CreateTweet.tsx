import React from "react";
// useForm hooks
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//adding to database
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// navigate to different page
import { useNavigate } from "react-router-dom";

interface CreateTweetData {
  title: string;
  tweet: string;
}




const CreateTweet = () => {
  //navigate
  let navigate = useNavigate()
  // get user info
  const [user] = useAuthState(auth);

  //useForm
  const schema = yup
    .object()
    .shape({
      title: yup.string().required("Missing title."),
      tweet: yup.string().required("Missing Tweet."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTweetData>({
    resolver: yupResolver(schema),
  });


//adding tweet
  const onCreateTweet = async (data: CreateTweetData) => {
    try {
      const docRef = await addDoc(collection(db, "tweet"), {
        ...data,
        username: user?.displayName,
        userId: user?.uid,
      });
      navigate("/");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onCreateTweet)}>
      <input placeholder="Tittle ..." {...register("title")}></input>
      <p>{errors.title?.message}</p>
      <textarea placeholder="Tweet ..." {...register("tweet")} />
      <p>{errors.tweet?.message}</p>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default CreateTweet;
