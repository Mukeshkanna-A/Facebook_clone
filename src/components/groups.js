import React from 'react'
import { Link } from 'react-router-dom';
// import Feeds from "../Images/feeds.png";

export const Groups = () => {
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
                      <h4>Groups</h4>
                    </div>

                    <div>
                      <i class="fa-solid fa-gear  text-muted fs-4"></i>
                    </div>
                  </div>
                </li>

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
                    Search groups
                  </label>
                </div>
              </span>

              <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                  <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                    <div className=" p-2 d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-comments"></i>

                      <h5 className="m-0 p-1 ms-2 text-muted">
                        Your feed
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
                    <i class="fa-brands fa-cc-discover"></i>

                      <h5 className="m-0 p-1 ms-2 text-muted">
                        Discover
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
                    <i class="fa-solid fa-users-rectangle"></i>
                      <h5 className="m-0 p-1 ms-2 text-muted">Your groups</h5>
                    </div>

                    <div className=" d-flex  align-items-center">
                      <i class="fa-solid fa-greater-than text-muted fs-6 me-1 "></i>
                    </div>
                  </Link>
                </li>

        <br></br>
                <div
                    className="bg-gray text-primary  fw-bold rounded p-2 text-center"
                    type="button"
                  > + Create New Group
                </div>
              </ul>
            </div>
          </div>
          <div className=" col-12 col-lg-8">
            <br />

            <div className="d-flex align-items-center justify-content-between">
              <h6 className=" text-muted my-5">Recent activity</h6>
              <div className=" d-flex  justify-content-evenly align-items-center">
                <p className=" mt-3 text-primary mx-1 align-items-center">
                  See all
                </p>
              </div>
            </div>

            <div className="my-2">
              {/* card-1 */}
              <div className="d-flex">
                      <img
                        src="https://loremflickr.com/320/240?lock=30976"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                        alt="avatar"
                      />
                      <h6>Latest Cinema News</h6>

                      <span className=" text-muted fs-7 mx-2 ">
                        Oct 15 at 1:20pm
                      </span>
                    </div>

                    <ul
                      className=" dropdown-menu border-0 shadow "
                      aria-labelledby="post"
                    >
                      <li className=" d-flex align-items-center ">
                        <a
                          href="#d "
                          className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                        >
                          Edit post
                        </a>
                      </li>
                      <li className=" d-flex align-items-center ">
                        <a
                          href="#d "
                          className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                        >
                          Delete post
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className=" mt-3"
                  >
                    <p>
                    It was apparent he was really only after his own truth that he'd already decided. lo
                    </p>

                  </div>
                  <div className=" mt-1 d-flex justify-content-between align-items-center ">
                    <div>
                      <div className=" d-flex align-items-center ">
                        <img
                          className="mx-1"
                          src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                          alt=""
                          style={{
                            width: "28px",
                            height: "28px",
                            objectFit: "cover",
                          }}
                        />
                        <p className="text-muted mx-2 mt-3">120k</p>
                      </div>
                    </div>
                    {/* seconf */}
                    <div className=" d-flex align-items-center">
                      <p className=" m-0 text-muted mx-1">15k</p>
                      <i class="fa-solid fa-comment me-3"></i>
                      <p className=" m-0 text-muted mx-1">35k</p>

                      <i class="fa-solid fa-share"></i>
                    </div>
                  </div>
                  <hr />
                  <div className=" d-flex align-items-center justify-content-between">
                    <div className=" ">
                      <i class="fa-regular fa-thumbs-up fs-5 mx-2 text-muted"></i>
                      Like
                    </div>

                    <div className=" align-items-center d-flex">
                      <i class="fa-regular fa-comment fs-5 mx-2  text-muted"></i>
                      Comments
                    </div>

                    <div className=" d-flex align-items-center ">
                      <i class="fa-solid fa-share  fs-5 mx-2 text-muted"></i>
                      Share
                    </div>
                  </div>
                </div>
              </div>
        
              </div>
              
            </div>
    
    );
};
