import React from "react";
import { Link } from "react-router-dom";

export const Friends = () => {
  return (
    <div>
      <div className=" container-fluid">
        <div className=" row justify-content-evenly">
          <div className="col-12 col-lg-3 ">
            <div
              className=" d-none bg-white d-lg-block h-100 fixed-top overflow-hidden scrollbar "
              style={{ maxWidth: "360px", width: "100%", zIndex: "4" }}
            >
              <ul
                className=" navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5 "
                style={{ paddingTop: "56px" }}
              >
                {/* top */}

                <li className=" dropdown-item p-1 rounded">
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className=" p-2">
                      <h4>Friends</h4>
                    </div>

                    <div>
                      <i class="fa-solid fa-gear  text-muted fs-4"></i>
                    </div>
                  </div>
 

                </li>

                <li className="dropdown-item p-1 rounded bg-gray mx-auto  d-flex align-items-center">
                  <div className=" p-1 ">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/i0pziEs5Wj6.png"
                      alt="img"
                      className=" rounded-circle me-2 "
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <h5 className="m-0">Home</h5>
                  </div>
                </li>

                <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                  <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                    <div className=" p-2 d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-user text-muted"></i>

                      <h5 className="m-0 p-1 ms-2 text-muted">
                        Friend Requests
                      </h5>
                    </div>

                    <div className=" d-flex  align-items-center">
                      <i class="fa-solid fa-greater-than text-muted fs-6 me-1 "></i>
                    </div>
                  </Link>
                </li>

                <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                  <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                    <div className=" p-2 d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-user-plus text-muted  "></i>
                      <h5 className="m-0 p-1 ms-2 text-muted">Suggestions</h5>
                    </div>

                    <div className=" d-flex  align-items-center">
                      <i class="fa-solid fa-greater-than text-muted fs-6 me-1 "></i>
                    </div>
                  </Link>
                </li>

                <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                  <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                    <div className=" p-2 d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-user text-muted"></i>
                      <h5 className="m-0 p-1 ms-2 text-muted">All friends</h5>
                    </div>

                    <div className=" d-flex  align-items-center">
                      <i class="fa-solid fa-greater-than text-muted fs-6 me-2"></i>
                    </div>
                  </Link>
                </li>

                <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                  <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                    <div className=" p-2 d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-gift text-muted"></i>
                      <h5 className="m-0 p-1 ms-2 text-muted">Birthdays</h5>
                    </div>
                  </Link>
                </li>

                <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                  <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                    <div className=" p-2 d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-user-check text-muted"></i>
                      <h5 className="m-0 p-1 ms-2 text-muted">Custom Lists</h5>
                    </div>

                    <div className=" d-flex  align-items-center">
                      <i class="fa-solid fa-greater-than text-muted fs-6 me-2 "></i>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-12 col-lg-8">
            <br />

            <div className="d-flex align-items-center justify-content-between">
              <h4 className=" text-muted my-5">People you may know</h4>
              <div className=" d-flex  justify-content-evenly align-items-center">
            
                <p className=" mt-3 text-primary mx-1 align-items-center">
                  See all
                </p>

              </div>
            </div>

            <div className=" d-flex align-items-center my-3">
              {/* card-1 */}
              <div class="card mx-2 shadow" style={{ width: "18rem" }}>
                <img
                  src="https://loremflickr.com/320/240?random=2"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title ms-1 ">SAM</h5>
                  <div
                    className="bg-gray text-primary  fw-bold rounded p-2 text-center"
                    type="button"
                  >
                    Add Friend
                  </div>
                  <div
                    className=" fw-bold mt-1 bg-gray text-dark rounded p-2 text-center"
                    type="button"
                  >
                    Remove
                  </div>

                </div>
              </div>
              {/* card-2 */}
              <div class="card mx-2 shadow" style={{ width: "18rem" }}>
                <img
                  src="https://loremflickr.com/320/240?random=3"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title ms-1 ">Ragav</h5>
                  <div
                    className=" bg-gray text-primary fw-bold rounded p-2 text-center"
                    type="button"
                  >
                    Add Friend
                  </div>
                  <div
                    className=" fw-bold mt-1 bg-gray text-dark rounded p-2 text-center"
                    type="button"
                  >
                    Remove
                  </div>

                </div>
              </div>

              {/* card-3 */}
              <div class="card mx-2 shadow" style={{ width: "18rem" }}>
                <img
                  src="https://loremflickr.com/320/240"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title ms-1 ">Sharma</h5>
                  <div
                    className=" bg-gray text-primary fw-bold rounded p-2 text-center"
                    type="button"
                  >
                    Add Friend
                  </div>
                  <div
                    className=" fw-bold mt-1 bg-gray text-dark rounded p-2 text-center"
                    type="button"
                  >
                    Remove
                  </div>

                </div>
              </div>
            </div>
            {/* second */}
            <div className=" d-flex align-items-center my-3">
              {/* card-1 */}
              <div class="card mx-2 shadow" style={{ width: "18rem" }}>
                <img
                  src= "https://loremflickr.com/320/240/paris,girl/all"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title ms-1 ">Suresh</h5>
                  <div
                    className=" bg-gray text-primary fw-bold rounded p-2 text-center"
                    type="button"
                  >
                    Add Friend
                  </div>
                  <div
                    className=" fw-bold mt-1 bg-gray text-dark rounded p-2 text-center"
                    type="button"
                  >
                    Remove
                  </div>

                </div>
              </div>
              {/* card-2 */}
              <div class="card mx-2 shadow" style={{ width: "18rem" }}>
                <img
                  src="https://loremflickr.com/g/320/240/paris"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title ms-1 ">Mugi</h5>
                  <div
                    className=" bg-gray text-primary fw-bold rounded p-2 text-center"
                    type="button"
                  >
                    Add Friend
                  </div>
                  <div
                    className=" fw-bold mt-1 bg-gray text-dark rounded p-2 text-center"
                    type="button"
                  >
                    Remove
                  </div>

                </div>
              </div>

              {/* card-3 */}
              <div class="card mx-2 shadow" style={{ width: "18rem" }}>
                <img
                  src="https://loremflickr.com/320/240/brazil,rio"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title ms-1 ">RajKumar</h5>
                  <div
                    className=" bg-gray text-primary fw-bold rounded p-2 text-center"
                    type="button"
                  >
                    Add Friend
                  </div>
                  <div
                    className=" fw-bold mt-1 bg-gray text-dark rounded p-2 text-center"
                    type="button"
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


