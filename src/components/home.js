import React from "react";
import Friends from "../Images/Friends.png";
import Memories from "../Images/memories.png";
import Saved from "../Images/saved.png";
import Groups from "../Images/groups.png";
import Videos from "../Images/videos.png";
import Marketplace from "../Images/marketplace.png";
import Feeds from "../Images/feeds.png";
import Events from "../Images/event.png";
import Ads from "../Images/management.png";
import Fundraisers from "../Images/fundraisers.png";
import Pages from "../Images/pages.png";
import "../styled/home.css";

export const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly">
        {/* sidebar */}
        <div className="col-12 col-lg-3">
          <div
            className="d-none d-xxl-block h-100 fixed-top overflow-hidden scrollbar"
            style={{ maxWidth: "360px", width: "100%", zIndex: "4" }}
          >
            <ul
              className="navbar-nav mt-4 ms-3 d-flex flex-colunm pb-5 mb-5"
              style={{ paddingTop: "56px" }}
            >
              {/* top */}

              {/* avatar */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src="https://loremflickr.com/320/240?random=3"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Mukesh</p>
                  </div>
                </a>
              </li>
              {/* t-1 */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Friends}
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Friends</p>
                  </div>
                </a>
              </li>
              {/* t-2 */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Memories}
                      alt="Friends"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Memories</p>
                  </div>
                </a>
              </li>
              {/* t-3 */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Saved}
                      alt="Memories"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Saved</p>
                  </div>
                </a>
              </li>
              {/* t-4 */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Groups}
                      alt="groups"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Groups</p>
                  </div>
                </a>
              </li>
              {/* t-5 */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Videos}
                      alt="video"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Video</p>
                  </div>
                </a>
              </li>
              {/* t-6  */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Marketplace}
                      alt="Marketplace"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">MarketPlace</p>
                  </div>
                </a>
              </li>
              {/* t-7  */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Feeds}
                      alt="Feeds"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Feeds</p>
                  </div>
                </a>
              </li>
              {/* t-8  */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Events}
                      alt="Events"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Events</p>
                  </div>
                </a>
              </li>
              {/* t-9  */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Ads}
                      alt="Ads"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Ads manager</p>
                  </div>
                </a>
              </li>
              {/* t-10  */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Fundraisers}
                      alt="Fundraisers"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Fundraisers</p>
                  </div>
                </a>
              </li>
              {/* t-11  */}
              <li className="dropdown-item p-1 rounded">
                <a
                  href="#"
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  <div className="p-2">
                    <img
                      src={Pages}
                      alt="pages"
                      className="rounded-circle me-2"
                      style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <p className="m-0">Pages</p>
                  </div>
                </a>
              </li>
            </ul>
            {/* terms  */}
            <div className="p-2 mt-5">
              <p className="text-muted" style={{ fontSize: "15px" }}>
                Privacy &#8226; Terms &#8226; Advertising &#8226; Ad Choices
                &#8226; Cookies &#8226; More &#8226; Meta &copy; 2023
              </p>
            </div>
          </div>
        </div>
        {/* Timeline */}
        
        <div className="col-12 col-lg-6 ">
            <div
              className=" d-flex flex-column justify-content-center w-100 mx-auto"
              style={{ paddingTop: "56px" }}
            >
              {/* story sec */}
              <div className=" d-flex mx-auto position-relative mt-5">
                {/* s-1 */}
                <div
                  className="  mx-1 bg-white rounded story"
                  style={{ width: "10em", height: "250px" }}
                >
                  <img
                    src="https://loremflickr.com/320/240?random=3"
                    alt="story post"
                    className=" rounded-top card-img-top   "
                    style={{
                      minHeight: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className=" d-flex align-items-center justify-content-center position-relative"
                    style={{ minHeight: "50px" }}
                  >
                    <p className=" mt-2 text-center fs-7 fw-bold">
                      Create Story
                    </p>
                    <div className=" position-absolute top-0 start-50 translate-middle">
                      <i className=" fas fa-plus-circle fs-3 text-primary bg-white p-1 rounded-circle"></i>
                    </div>
                  </div>
                </div>
                {/* s-2 */}
                <div
                  className="rounded mx-1 story "
                  type="button"
                  style={{ width: "9em", height: "250px" }}
                >
                  <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="story-2"
                    className=" card-img-top rounded"
                    style={{ minHeight: "250px", objectFit: "cover" }}
                  />
                </div>
                {/* s-3 */}
                <div
                  className="rounded mx-1 story"
                  type="button"
                  style={{ width: "9em", height: "250px" }}
                >
                  <img
                    src="https://picsum.photos/200/300"
                    alt="story-2"
                    className=" card-img-top rounded"
                    style={{ minHeight: "250px", objectFit: "cover" }}
                  />
                </div>
                {/* s-4 */}
                <div
                  className="rounded mx-1 story"
                  type="button"
                  style={{ width: "9em", height: "250px" }}
                >
                  <img
                    src="https://picsum.photos/id/237/200/300"
                    alt="story-2"
                    className=" card-img-top rounded"
                    style={{ minHeight: "250px", objectFit: "cover" }}
                  />
                </div>

                <div className=" position-absolute top-50 start-100 translate-middle mt-5 d-none d-lg-block">
                  <i className=" fas fa-arrow-right p-3 border text-muted bg-white rounded-circle"></i>
                </div>
              </div>
              {/* create post */}
              <div className=" row mx-auto w-100">
                <div className=" col-12 col-lg-9 bg-white  mx-auto  mt-3 border rounded shadow p-3">
                  <div type="button" className=" d-flex ">
                    <div className=" p-1">
                      <img
                        src="https://picsum.photos/id/237/200/300"
                        className=" rounded-circle "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                        alt="avatar"
                      />
                    </div>
                    <input
                      type="text"
                      className=" btn shadow-none form-control rounded-pill border-0 bg-gray "
                      placeholder="What's on your mind ?"
                    />
                  </div>
                  <hr />
                  
                  {/* action */}
                  <div className=" d-flex mt-3">
                    <div
                      className=" d-flex align-items-center justify-content-center rounded dropdown-item post-over p-2"
                      type="button"
                    >
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
                        alt="video"
                        className=" rounded mx-2"
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <p className=" m-0 text-muted fs-6 ">Live Video</p>
                    </div>
                    <div
                      className="post-over p-2 d-flex align-items-center justify-content-center rounded dropdown-item"
                      type="button"
                     
                    >
                      <img
                        type="button"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                        alt="video"
                        className=" rounded mx-2"
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <p className=" m-0 text-muted fs-6 ">Photo/Video</p>
                    </div>
                    <div
                      className=" d-flex align-items-center justify-content-center rounded dropdown-item post-over"
                      type="button"
              
                    >
                      <img
                        type="button"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                        alt="video"
                        className=" rounded mx-2"
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "cover",
                        }}
                      />
                      <p className=" m-0 text-muted fs-6 ">Feeling/Activity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  card-1 */}
              <div className=" row mx-auto w-100">
                <div className=" col-12 col-lg-9 bg-white mx-auto mt-2 rounded shadow p-4">
                  <div>
                    <h5 className=" text-muted mt-1">Suggested for you</h5>
                  </div>
                  <hr />
                  <div className=" d-flex   justify-content-between ">
                    <div className="d-flex  ">
                      <img
                        src="https://picsum.photos/id/237/200/300"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                        alt="avatar"
                      />
                      <h6 className=" text-muted ">Latest Bollywood News</h6>

                      <span className=" text-muted fs-7 mx-2 ">
                        Oct 15 at 1:20pm
                      </span>
                    </div>
                    <i
                      className=" fas fa-ellipsis-h text-muted fs-5 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="post"
                    ></i>

                    <i class="fa-solid fa-x text-muted fs-5   "></i>
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
                    It was apparent he was really only after his own truth that he'd already decided
                    </p>
                    <img
                      src="https://loremflickr.com/320/240?lock=1"
                      alt=".."
                      className="w-100"
                    />
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
              {/* card-2 */}
              <div className=" row mx-auto   w-100">
                <div className=" col-12 col-lg-9 bg-white mx-auto mt-3  rounded shadow p-4">
                  <div>
                    <h5 className=" text-muted mt-2">Suggested for you</h5>
                  </div>
                  <hr />
                  <div className=" d-flex   justify-content-between ">
                    <div className="d-flex  ">
                      <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                        alt="avatar"
                      />
                      <h6 className=" text-muted ">Awesome Things</h6>

                      <span className=" text-muted fs-7 mx-2 ">
                        Oct 15 at 1:20pm
                      </span>
                    </div>
                    <i
                      className=" fas fa-ellipsis-h text-muted fs-5 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="post"
                    ></i>

                    <i class="fa-solid fa-x text-muted fs-5   "></i>
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
                    className=" mt-3 "
                  >
                    <p>
                    The third option is to have the random paragraph be the ending paragraph in a short story. 
                    </p>
                    <img
                      src="https://loremflickr.com/320/240?lock=212"
                      alt=".."
                      className="w-100"
                    />
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
                        <p className="text-muted mx-2 mt-3">10k</p>
                      </div>
                    </div>
                    {/* seconf */}
                    <div className=" d-flex align-items-center">
                      <p className=" m-0 text-muted mx-1">15k</p>
                      <i class="fa-solid fa-comment me-3"></i>
                      <p className=" m-0 text-muted mx-1">6k</p>

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
          {/* chatbar */}
          <div className="col-12 col-lg-3 ">
            <div
              className=" d-none d-lg-block h-100 position-fixed   end-0 overflow-hidden scrollbar "
              style={{
                maxWidth: "360px",
                paddingTop: "56px",
                left: "initial !important",
                width: "100%",
                zIndex: "4",
              }}
            >
              <div className=" p-3 mt-4">
                <h5 className=" text-muted ">Sponsored</h5>
                <li className=" dropdown-item my-2 d-flex justify-content-between p-1">
                  <a
                    href="#h"
                    className=" text-decoration-none text-dark d-flex align-items-center"
                  >
                    <img
                      src="https://picsum.photos/seed/picsum/200/300"
                      alt="sponser"
                      className=" rounded me-3"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p className=" m-0">From which to begin</p>
                      <span className=" text-muted fs-7">Greetings.com</span>
                    </div>
                  </a>
                  <div
                    className=" d-flex rounded-circle align-items-center justify-content-center p-2 bg-white mx-1 nav-item"
                    type="button"
                    style={{ width: "38px", height: "38px" }}
                  >
                    <i
                      className=" fas fa-ellipsis-h text-muted"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                    ></i>
                  </div>
                </li>
                <hr />
                <div className=" d-flex justify-content-between align-items-center my-3">
                  <p className="text-muted fs-5 m-0">Contacts</p>
                  <div className=" text-muted">
                    <i
                      class="fa-solid fa-magnifying-glass mx-2"
                      type="button"
                    ></i>
                    <i
                      className=" fas fa-ellipsis-h text-muted mx-2"
                      type="button"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul
                      className="dropdown-menu shadow"
                      style={{ width: "18em" }}
                    >
                      
                    </ul>
                  </div>
                </div>

                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Selva</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Prabu</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://loremflickr.com/320/240?lock=30976"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Rishi</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://loremflickr.com/320/240?lock=1"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Ajaykumar</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://loremflickr.com/320/240?lock=30976"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Guna</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://loremflickr.com/320/240?lock=30976"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Shahid</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://loremflickr.com/320/240?lock=212"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Shakeel</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://loremflickr.com/320/240?random=3"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Akash</p>
                  </div>
                </li>
                <li className=" dropdown-item my-1 px-0 rounded" type="button">
                  <div className=" d-flex align-items-center mx-2">
                    <div className=" position-relative">
                      <img
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt="img"
                        className=" rounded-circle me-2 "
                        style={{
                          width: "38px",
                          height: "38px",
                          objectFit: "cover",
                        }}
                      />
                      <span
                        style={{ left: "75%" }}
                        className=" position-absolute bottom-0 translate-middle border border-light rounded-circle bg-success p-1"
                      >
                        <span className=" visually-hidden"></span>
                      </span>
                    </div>
                    <p className=" m-0">Mohan</p>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div
          type="button"
          className=" fixed-bottom me-5 p-3"
          style={{ zIndex: "6", left: "initial" }}
        >
          <i className=" fas fa-edit bg-white rounded-circle p-3 shadow"></i>
        </div>
       
      </div>
  );
};