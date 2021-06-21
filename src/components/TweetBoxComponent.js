import React, { useState } from "react";
import axios from "axios";
import classNames from "classnames";
export default function TweetBoxComponent({ fetchTweets }) {
  const [tweetText, setTweetText] = useState("");
  const [isPublishingTweet, setIsPublishingTweet] = useState(false);
  async function sendTweet() {
    try {
      setIsPublishingTweet(true);
      const sendTweetResponse = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/tweets/add`,
        {
          tweet: tweetText,
          userHandle: "saurabhnative",
          userName: "Late millenial",
          isLiked: false,
        }
      );
      console.log("sendTweetResponse", sendTweetResponse);
      setIsPublishingTweet(false);
      fetchTweets();
      setTweetText("");
    } catch (err) {
      console.log("error", err);
    }
  }
  return (
    <div className="px-4 py-3">
      <div className="d-flex">
        <div>
          <img
            src="images/avatar.png"
            alt="tweet-avatar"
            className="tweet-avatar"
          />
        </div>
        <div className="ms-3">
          <textarea
            placeholder="What's happening?"
            className="tweet-textarea"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex mt-1">
        <button
          className={classNames("btn btn-primary ms-auto tweet-button", {
            inactive: tweetText.length === 0,
          })}
          type="button"
          onClick={() => sendTweet()}
        >
          {isPublishingTweet ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <span>Tweet</span>
          )}
        </button>
      </div>
    </div>
  );
}
