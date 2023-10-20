import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styled/navbar.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div
      className="bg-white d-flex align-items-center fixed-top shadow"
      style={{ minHeight: "56px", zIndex: "5" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* search */}
          <div className="col d-flex align-items-center ">
            {/* logo */}
            <i
              className="fa-brands fa-facebook text-primary"
              style={{ fontSize: "3rem" }}
            />
            {/* searchbar */}
            <div className="input-group ms-2">
              {/* mobile */}
              <span className="input-group-prepend d-lg-none">
                <div
                  className="input-group-text bg-gray border-0 rounded-circle"
                  style={{ minHeight: "40px" }}
                >
                  <i
                    className="fas fa-search me-0 text-muted"
                    style={{ color: "#F0F2F5" }}
                  ></i>
                </div>
              </span>
              {/* desktop */}
              <span className="input-group-prepend d-none d-lg-block">
                <div
                  className="input-group-text bg-gray border-0 rounded-pill"
                  style={{ minHeight: "40px", minWidth: "230px" }}
                >
                  <i
                    className="fas fa-search me-2 text-muted"
                    style={{ color: "#F0F2F5" }}
                  ></i>
                  <label
                    className="m-0 text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Search Facebook
                  </label>
                </div>
              </span>
            </div>
          </div>
          {/* nav */}
          <div className="col d-none d-lg-flex justify-content-center">
            {/* Home */}

            <div className="mx-4 nav__btn ">
            <Link to="/">
              <button className="btn px-4">
              
                <i className="fa-solid fa-house fa-2xl text-muted fs-4"></i>

              </button>
              </Link>
            </div>
            {/* Friends */}

            <div className="mx-4 nav__btn">
            <Link to="/friends">
              <button className="btn px-4">
              
                <i className="fa-solid fa-user-group fa-2xl text-muted fs-4"></i>

              </button>
              </Link>
            </div>
            {/* Groups */}
            <div className="mx-4 nav__btn">
            <Link to="/groups">
              <button className="btn px-4">

                <i className="fa-solid fa-users-line fa-2xl text-muted fs-4"></i>
                
              </button>
              </Link>
            </div>
          </div>
          {/* menus */}
          <div className="col d-flex align-items-center justify-content-end">

            {/* Menu */}
            <div className="d-flex align-items-center justify-content-center px-3">
            <i class="fa-solid fa-ellipsis-vertical fa-xl"> </i>{" "}
            <i class="fa-solid fa-ellipsis-vertical fa-xl"> </i>{" "}
            <i class="fa-solid fa-ellipsis-vertical fa-xl"> </i>{" "}
            </div>
            {/* Messenger */}
            <div className="d-flex align-items-center justify-content-center">
            <i class="fa-brands fa-facebook-messenger fa-xl px-3"></i>
            </div>
            {/* Notifications */}
            <div className="d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-bell fa-xl px-3"></i>
            </div>
            {/* Avatar */}
            <div className="d-none d-xl-flex align-items-center justify-content-center">
              <img
                src="https://loremflickr.com/320/240?random=3"
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: "38px", height: "38px",objectFit:"cover"}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
