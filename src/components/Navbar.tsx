import React from "react";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar fixed z-50 bg-gradient-to-b from-black to-transparent px-4 text-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn px-2 md:hidden">
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
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-neutral shadow"
            >
              <li>
                <a
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  首頁
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/my-list")}>我的檔案</a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => navigate("/home")}
            className="btn-ghost btn pl-2 text-2xl font-bold normal-case"
          >
            See&Read
          </button>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  首頁
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/my-list")}>我的檔案</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end gap-2">
          <label htmlFor="search-modal" className="btn-ghost btn-circle btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-neutral shadow"
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
                <a
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <label htmlFor="search-modal" className="modal cursor-pointer">
        <label className="modal-box relative h-[70vh]" htmlFor="">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input w-full"
          />
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
              <h3 className="text-xl font-semibold">book name</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
              <h3 className="text-xl font-semibold">book name</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
              <h3 className="text-xl font-semibold">book name</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
              <h3 className="text-xl font-semibold">book name</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
              <h3 className="text-xl font-semibold">book name</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
              <h3 className="text-xl font-semibold">book name</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
              <h3 className="text-xl font-semibold">book name</h3>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default Navbar;
