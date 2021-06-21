import React from "react";
import { FiSearch } from "react-icons/fi";

export default function RightSideBar() {
  function renderTrendingCategories() {
    const categories = [
      {
        name: "New Software launch",
        category: "Technology",
        subType: "Trending",
        tweetCount: 189,
      },
      {
        name: "Record high score in cricket",
        category: "Sports",
        subType: "Trending",
        tweetCount: 200,
      },
      {
        name: "New space shuttle launch",
        category: "Space",
        subType: "Trending",
        tweetCount: 280,
      },
    ];
    return categories.map((categoryItem) => {
      return (
        <div className="px-3 py-2 trending-sub-section" key={categoryItem.name}>
          <div className="flex trending-top-subText">
            <span>
              {categoryItem.category} · {categoryItem.subType}
            </span>
          </div>
          <div className="trending-title-text">
            <span>{categoryItem.name}</span>
          </div>
          <div className="trending-top-subText">
            <span>{categoryItem.tweetCount}K tweets</span>
          </div>
        </div>
      );
    });
  }
  function renderTopicsToFollow() {
    const topics = [
      {
        name: "Open source",
        category: "Technology",
      },
      {
        name: "Web development",
        category: "Technology",
      },
      {
        name: "Databases",
        category: "Technology",
      },
    ];
    return topics.map((topicItem) => {
      return (
        <div className="px-3 py-2 trending-sub-section" key={topicItem.name}>
          <div className="trending-title-text">
            <span>{topicItem.name}</span>
          </div>
          <div className="trending-top-subText">
            <span>{topicItem.category}</span>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="right-sidebar px-4 pt-1">
      <div className="search-component">
        <div className="d-flex align-items-center search-component">
          <FiSearch />
          <input
            type="text"
            className="search-text-input"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="right-sidebar-trending-section mt-3 py-1">
        <div className="header d-flex align-items-center right-section-header px-3">
          What's happening?
        </div>
        {renderTrendingCategories()}
      </div>
      <div className="right-sidebar-trending-section mt-3 py-1">
        <div className="header d-flex align-items-center right-section-header px-3">
          Topics to follow
        </div>
        {renderTopicsToFollow()}
      </div>
    </div>
  );
}
