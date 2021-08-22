import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="nav-item">
        <Link to="/">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 19.0656C3.61929 19.0656 2.5 17.9463 2.5 16.5656V8.23222C2.5 8.20398 2.50141 8.17605 2.50415 8.14852H2.5C2.5 7.66856 2.69067 7.20824 3.03006 6.86885L8.23223 1.66668C9.2085 0.69037 10.7914 0.69037 11.7677 1.66668L16.9699 6.86887C17.3093 7.20825 17.5 7.66856 17.5 8.14852H17.4958C17.4986 8.17605 17.5 8.20398 17.5 8.23222V16.5656C17.5 17.9463 16.3807 19.0656 15 19.0656H5ZM10.5892 2.84519L15.8333 8.08928V16.5656C15.8333 17.0258 15.4602 17.3989 15 17.3989H12.5V13.2323C12.5 11.8515 11.3807 10.7323 10 10.7323C8.61925 10.7323 7.5 11.8515 7.5 13.2323V17.3989H5C4.53977 17.3989 4.16667 17.0258 4.16667 16.5656V8.08933L9.41075 2.84519C9.73617 2.51976 10.2638 2.51976 10.5892 2.84519Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/analytics">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.17851 13.6935L0 12.515L5.89256 6.62244L11.1958 11.9258L14.7314 8.39017L13.2794 6.93823L18.8562 5.44393L17.3619 11.0207L15.9099 9.56875L11.1958 14.2828L5.89256 8.9795L1.17851 13.6935Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/info">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16669 9.1495C9.16669 8.68925 9.53977 8.31614 10 8.31614C10.4603 8.31614 10.8334 8.68925 10.8334 9.1495V14.1495C10.8334 14.6097 10.4603 14.9828 10 14.9828C9.53977 14.9828 9.16669 14.6097 9.16669 14.1495V9.1495Z"
              fill="white"
            />
            <path
              d="M10 5.04263C9.53977 5.04263 9.16669 5.41572 9.16669 5.87596C9.16669 6.33619 9.53977 6.70929 10 6.70929C10.4603 6.70929 10.8334 6.33619 10.8334 5.87596C10.8334 5.41572 10.4603 5.04263 10 5.04263Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6023 5.39765 18.3333 10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667ZM3.33335 10C3.33335 13.6819 6.31812 16.6667 10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.3181 13.6819 3.33333 10 3.33333C6.31812 3.33333 3.33335 6.3181 3.33335 10Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
