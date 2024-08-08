import React, { useState } from "react";
import "../css/Blog.css";
import Navblog from "./Navblog";
import blogdataone from "../Blog/Blogdataone";
import Footer from "./Footer";
function Blog() {
  const [blog, setBlog] = useState(blogdataone);
  return (
    <>
      <div className="main-blog">
        <div className="blog-bg">
          <Navblog />
        </div>
        <div className="row blog-row">
          <img
            src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/664ce605c29e6a3266d6ef95_image3.png"
            alt="..."
            className=""
          />
          <h6>Product & Features</h6>
          <h1>
            REFINING DISCORD’S MOBILE EXPERIENCE WITH
            <br /> YOUR FEEDBACK
          </h1>
        </div>

        <div className="row blog-row-1">
          {blog.slice(0, 2).map((item, index) => {
            return (
              <>
                <div className="col-lg-6 col-12" key={index}>
                  <img src={item.photo} alt="...." className="first-blogpic" />
                  <h6>{item.hd}</h6>
                  <p>{item.cnt}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="row blog-row-2">
          {blog.slice(2, 5).map((item, index) => {
            return (
              <>
                <div className="col-lg-4 col-12" key={index}>
                  <img src={item.photo} alt="...." className="first-blogpic" />
                  <h6>{item.hd}</h6>
                  <p>{item.cnt}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="row blog-row-2">
          {blog.slice(5, 8).map((item, index) => {
            return (
              <>
                <div className="col-lg-4 col-12" key={index}>
                  <img src={item.photo} alt="...." className="first-blogpic" />
                  <h6>{item.hd}</h6>
                  <p>{item.cnt}</p>
                </div>
              </>
            );
          })}
        </div>

        <div className="row">
          <div className="last-blog">
            <div className="last-blgone">
              <h6>Collaction</h6>
              <h1>Community</h1>
              <img
                src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61d391f4df37f3002e7f2fd7_Spot-Community-FIX.svg"
                alt="...."
                className=""
              />
              <p>
                Stories, spotlights, and behind the scenes from the heart and
                soul of Discord: the community.
              </p>
              <button>View Collaction</button>
            </div>
            <div className="last-blgtwo">
              {blog.slice(6, 7).map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.photo} alt="...." className="blgtwo-pic" />
                    <p>{item.cnt}</p>
                  </div>
                );
              })}
              <div className="sub-blgtwo">
                <div className="row">
                  {blog.slice(8, 11).map((item, index) => {
                    return (
                      <>
                        <div className="col-lg-4 col-12" key={index}>
                          <img src={item.photo} alt="pic" className="" />
                          <p>{item.cnt}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row last-blog-rows">
          <div className="last-blog">
            <div className="last-blgone">
              <h6>Collaction</h6>
              <h1>How To Discord</h1>
              <img
                src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0dbe5d5979723b723529_Spot-Resources%26Education.svg"
                alt="...."
                className=""
              />
              <p>
                Stories, spotlights, and behind the scenes from the heart and
                soul of Discord: the community.
              </p>
              <button>View Collaction</button>
            </div>
            <div className="last-blgtwo">
              {blog.slice(12, 13).map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.photo} alt="...." className="blgtwo-pic" />
                    <p>{item.cnt}</p>
                  </div>
                );
              })}
              <div className="sub-blgtwo">
                <div className="row">
                  {blog.slice(15, 18).map((item, index) => {
                    return (
                      <>
                        <div className="col-lg-4 col-12" key={index}>
                          <img src={item.photo} alt="pic" className="" />
                          <p>{item.cnt}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
