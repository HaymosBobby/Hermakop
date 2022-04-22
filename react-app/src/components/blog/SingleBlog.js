import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogArt from './BlogArt';

const SingleBlog = () => {
    const [singleBlog, setSingleBlog] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
      getBlog(id);;
    }, []);

    const getBlog = async (id) => {
      setLoading(true)
      const result = await axios.get(
        `http://localhost:1337/api/blogs/${id}?populate=*`,
      );
     
      setSingleBlog(result.data.data);
      setLoading(false);
    }

  return (
    <div>
      {(!loading && singleBlog.id) && <BlogArt key={singleBlog.id} title={singleBlog.attributes.title} content={singleBlog.attributes.content} image={singleBlog.attributes.image} categories={singleBlog.attributes.categories} />}
    </div>
  )
}

export default SingleBlog;


{/* //<BlogArt key={eachBlog.id} title={eachBlog.attributes.title} content={eachBlog.attributes.content} image={eachBlog.attributes.image} categories={eachBlog.attributes.categories} /> */}
