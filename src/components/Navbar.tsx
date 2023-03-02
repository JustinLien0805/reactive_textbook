import React from "react";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar fixed z-50 text-base-100 bg-gradient-to-b from-black to-transparent px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn px-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a
                onClick={() => {
                  navigate("/library");
                }}
              >
                圖書館
              </a>
            </li>
            <li>
              <a>我的檔案</a>
            </li>
          </ul>
        </div>
        <button
          onClick={() => navigate("/home")}
          className="btn-ghost btn p-0 text-3xl font-bold normal-case"
        >
          See&Read
        </button>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                onClick={() => {
                  navigate("/library");
                }}
              >
                圖書館
              </a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end gap-2">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src={avatar} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
