import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './blogs.css';

import BlogLists from './components/blog/BlogLists';
import Header from './components/Header';
import Footer from './components/Footer';
import EachBlog from './components/blog/SingleBlog';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route exact path="/"  element={<HomePage/>} />
            <Route exact path="/bloglists"  element={<BlogLists/>} />
            {/* <Route exact path="/eachblog/:id"  render = {(props) => <EachBlog {...props}/>} /> */}
            <Route
              path="blog/:id"
              element={<EachBlog />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
