import React from "react";
// import Nav1 from "./Nav1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Nitro from "./component/Nitro";
import Discover from "./component/Discover";
import Saftey from "./component/Saftey";
import Support from "./component/Support";
import Blog from "./component/Blog";
import Careers from "./component/Careers";
import Login from "./Login";
import Download from "./component/Download";
import Library from "./Saftey/Library";
import Parent from "./Saftey/Parent";
import Register from "./Register";
import Feedback from "./Support/Feedback";
import Submit from "./Support/Submit";
import Signin from "./Support/Signin";
import Signup from "./Support/Signup";
import Blogfeatured from "./Blog/Blogfeatured";
import Blogfeaturedtwo from "./Blog/Blogfeaturedtwo";
import Blogfeaturedthree from "./Blog/Blogfeaturedthree";
import Blogcommunity from "./Blog/Blogcommunity";
import BlogHQ from "./Blog/BlogHQ";
import Blogpolicy from "./Blog/Blogpolicy";
import Blogproduct from "./Blog/Blogproduct";
import Privatecomponent from "./component/Privatecomponent";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Privatecomponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/Nitro" element={<Nitro />} />
            <Route path="/Discover" element={<Discover />} />
            <Route path="/Saftey" element={<Saftey />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/saftey-library" element={<Library />} />
            <Route path="/saftey-parent" element={<Parent />} />
            <Route path="/Support/feedback" element={<Feedback />} />
            <Route path="/Support/submit" element={<Submit />} />
            <Route path="/Support/signin" element={<Signin />} />
            <Route path="/Support/signup" element={<Signup />} />
            <Route path="/Blog/blog-featured" element={<Blogfeatured />} />
            <Route path="/Blog/blog-community" element={<Blogcommunity />} />
            <Route path="/Blog/blog-HQ" element={<BlogHQ />} />
            <Route path="/Blog/policy" element={<Blogpolicy />} />
            <Route path="/Blog/product" element={<Blogproduct />} />
            <Route
              path="/Blog/blog-featured-page-2"
              element={<Blogfeaturedtwo />}
            />
            <Route
              path="/Blog/blog-featured-page-3"
              element={<Blogfeaturedthree />}
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
