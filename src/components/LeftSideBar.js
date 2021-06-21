import React from "react";
import { FaEarlybirds, FaHashtag } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
import classNames from "classnames";
export default function LeftSideBar() {
  const headerComponents = [
    { title: "Home", icon: <RiHome7Fill /> },
    { title: "Expore", icon: <FaHashtag /> },
    { title: "Notifications", icon: <VscBell /> },
  ];
  function renderMenuItems() {
    return headerComponents.map((item, index) => {
      return (
        <div
          className={classNames(
            "d-flex fs-5 cursor-pointer mt-4 align-items-center",
            {
              "active-item": index === 0,
            }
          )}
          key={item.title}
        >
          <div className="d-flex align-items-center fs-4">{item.icon}</div>
          <div className="ps-3 fw-bold">{item.title}</div>
        </div>
      );
    });
  }
  return (
    <div className="left-sidebar px-4 py-3">
      <div>
        <FaEarlybirds className="site-icon" />
      </div>
      <div className="mt-3">{renderMenuItems()}</div>
    </div>
  );
}
