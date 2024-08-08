import React, { useState } from "react";
import "../css/Blog.css";
import blogdataone from "./Blogdataone";
import Navblog from "../component/Navblog";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
function Blogfeaturedtwo() {
  const [blog, setBlog] = useState(blogdataone);
  const navigate = useNavigate();
  return (
    <>
      <div className="main-blog">
        <div className="blogfeatured-bg">
          <Navblog />
          <h1>Featured</h1>
        </div>

        <div className="row blog-row-2">
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
          {blog.slice(3, 6).map((item, index) => {
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
          {blog.slice(13, 16).map((item, index) => {
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
        <div className="d-flex justify-content-center">
          <button
            className="blog-next"
            onClick={() => navigate("/Blog/blog-featured")}
          >
            <FaAngleLeft style={{ fontWeight: "300", marginTop: "-2px" }} />
            Previous
          </button>
          <button
            className="blog-next"
            onClick={() => navigate("/Blog/blog-featured-page-3")}
          >
            Next
            <FaAngleRight style={{ fontWeight: "300", marginTop: "-2px" }} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogfeaturedtwo;
