import React, { useState } from "react";
import "../css/Blog.css";
import blogdataone from "./Blogdataone";
import Navblog from "../component/Navblog";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
function Blogpolicy() {
  const [blog, setBlog] = useState(blogdataone);
  const navigate = useNavigate();
  return (
    <>
      <div className="main-blog">
        <div className="blogfeatured-bg">
          <Navblog />
          <h1>Policy & Saftey</h1>
        </div>

        <div className="row blog-row-2">
          {blog.slice(4, 6).map((item, index) => {
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
          {blog.slice(8, 11).map((item, index) => {
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
          {blog.slice(1, 3).map((item, index) => {
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
      </div>
      <Footer />
    </>
  );
}

export default Blogpolicy;
