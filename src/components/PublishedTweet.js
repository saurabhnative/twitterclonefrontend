import React from "react";
import { FaHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
export default function PublishedTweet({ tweetItem }) {
  function renderHeartIcon() {
    if (tweetItem.isLiked === true) {
      return <FaHeart />;
    } else {
      return <AiOutlineHeart />;
    }
  }
  return (
    <div className="published-tweet-container d-flex px-4 py-2">
      <div>
        <img
          src="images/avatar.png"
          alt="tweet-avatar"
          className="tweet-avatar"
        />
      </div>
      <div className="ms-4">
        <div className="d-flex">
          <div className="fw-bold">
            <span>{tweetItem.userName}</span>
          </div>
          <div className="ms-2 user-handle">
            <span>@{tweetItem.userHandle}</span>
          </div>
        </div>
        <div>{tweetItem.tweet}</div>
        <div className="action-button-container d-flex">
          <div className="tweetbox-action-icon">
            <BiMessageRounded />
          </div>
          <div>{renderHeartIcon()}</div>
        </div>
      </div>
    </div>
  );
}
