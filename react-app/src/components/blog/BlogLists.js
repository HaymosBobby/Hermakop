import React from 'react';
import axios from 'axios';
import BlogArt from './BlogArt';
import { useState, useEffect } from 'react';

const BlogLists = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBlogs();;
  }, []);


  const getBlogs = async () => {
    setLoading(true)
    const result = await axios.get(
      'http://localhost:1337/api/blogs/?populate=*',
    );
   

    setLoading(false);
    setBlogs(result.data.data); 
    // console.log(blogs);    
  }


  return (
    <div>
      { blogs.map(({id, attributes}) => ( 
        <BlogArt key={id} id={id} title={attributes.title} content={attributes.content} image={attributes.image} fullContent={attributes.fullContent} categories={attributes.categories} />
      ))
      }
    </div>
  )
}

export default BlogLists;















// import React, { Component} from 'react';
// import BlogArt from './BlogArt';

// import axios from 'axios';

// class BlogLists extends Component {
  
//   constructor(){
//     super()
//     this.state = {
//       blogs: []
//     }
//   }

//   async componentDidMount(){
//     const res = await axios.get('http://localhost:1337/api/blogs?populate=*')

//     this.setState({blogs: res.data.data})
//       // .then(res => this.setState({
//       //   blogs: res.data.data
//       // }))
//   }

//   render() {
//     const { blogs} = this.state;
//     // const {title, content, image, categories} = blogs.data.attributes;
//     console.log(blogs);
     
    
//     return (
//       <div>
//         {
//           blogs.map(({id, attributes}) => ( 
//             // console.log(attributes.title)
//             // console.log(attributes.image.data[0].attributes.formats.thumbnail.url)
//             // console.log(attributes.image.data.formats)
//             <BlogArt key={id} id={id} title={attributes.title} content={attributes.content} image={attributes.image} fullContent={attributes.fullContent} categories={attributes.categories} />
//             // post.attributes.cover.data.attributes.url
//             // <img src={attributes.image.data[0].attributes.formats.thumbnail.url} />
//           ))
//         }
//       </div>
//     )
//   }
// }

// export default BlogLists;


// 9320df25e986466f4682c5a0131dbfb17aaa4c9cbb329dc08a4eb8f248c08819a33e5b3b5471dc671ca57e15f83f7c0ee48c2efd8fe26db32db9fb838fdc3088eb3209a07a179dc6485abff730acf803db2e3c1f4c054b80c90a0cccf90121c1c90630bec981eb6d3fdff2c7d80c1341436f8dff129e21d7c51371d2670e9b24


