import React from 'react';
import { Link } from "react-router-dom";

const BlogArt = ({id, title, content, image, categories }) => {
  // console.log(categories.data[0].attributes.categoryname)
  // const category = categories.map(category => {return category.attributes.categoryname})
  console.log(categories.data[0])

  // const category = categories.data[0].attributes.categoryname;
  // const images = image.data[0].attributes.formats.thumbnail.url;

  return (
    <div className="bContainer">
      {/* <h5>{category}</h5> */}
      <div className="component">
        {/* <img src={images} alt="Images" /> */}
        <div className="">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
      <Link className="btn" to={`/blog/${id}`}>Read more</Link>
    </div>
  )
}

export default BlogArt;
