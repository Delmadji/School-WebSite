import React from "react";
import "./Blog.css";
import CardBlogs from "./CardBlogs";
import ImageOne from "../assets/image/Image-1.png";
import ImageTow from "../assets/image/Image-2.png";
import ImageThree from "../assets/image/Image-3.png";
import Imagefour from "../assets/image/Image-4.png";

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <h1>Latest Blog &amp; Articles</h1>
        <div className="blogCards">
          <CardBlogs
            image={ImageOne}
            name="By : Lexus Dip"
            date="20 Jan 2022"
            desc={`Back to school. cute little 
              school girls sitting on bench`}
          />

          <CardBlogs
            image={ImageTow}
            name="By : Lexus Dip"
            date="20 Jan 2022"
            desc={`Back to school. cute little 
              school girls sitting on bench`}
          />
          <CardBlogs
            image={ImageThree}
            name="By : Lexus Dip"
            date="20 Jan 2022"
            desc={`Back to school. cute little 
              school girls sitting on bench`}
          />
          <CardBlogs
            image={Imagefour}
            name="By : Lexus Dip"
            date="20 Jan 2022"
            desc={`Back to school. cute little 
              school girls sitting on bench`}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
