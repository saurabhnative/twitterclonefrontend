import React, { useEffect, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import TweetBoxComponent from "./TweetBoxComponent";
import PublishedTweet from "./PublishedTweet";
import axios from "axios";
export default function CentralComponent() {
  const [tweetsArray, setTweetsArray] = useState([]);
  async function fetchTweets() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/tweets/getAll`
      );
      const tweetsArray = response.data.results;
      if (tweetsArray) {
        setTweetsArray(tweetsArray);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchTweets();
  }, []);
  function renderHeader() {
    return (
      <div className="header d-flex align-items-center px-3 fs-5">
        <div>Home</div>
        <div className="ms-auto star-icon">
          <HiOutlineSparkles />
        </div>
      </div>
    );
  }
  function renderPublishedTweets() {
    return tweetsArray.map((tweetItem, index) => {
      return (
        <div key={index}>
          <PublishedTweet tweetItem={tweetItem} />
        </div>
      );
    });
  }
  return (
    <div className="central-component">
      {renderHeader()}
      <TweetBoxComponent fetchTweets={fetchTweets} />
      <div className="central-separator"></div>
      {renderPublishedTweets()}
    </div>
  );
}
