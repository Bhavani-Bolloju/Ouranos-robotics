import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import BlogPostPage from './pages/BlogPostPage';
import DetailPost from './components/blogs/DetailPost';
import { postsData } from './components/data/data';

function App() {

  const updateData = postsData.map(post => ({
    ...post, comments: [{
      name: 'neha',
      comment:'first comment'
  }] }));


  const sendBlogData =async function () {
    const send =await fetch('https://ouranos-f5357-default-rtdb.firebaseio.com/posts.json', {
      method: 'put',
      body: JSON.stringify(updateData),
      header: {
        'content-type': 'application/json',
      }
    });

  }

  useEffect(() => {
    // sendBlogData()
  },[])

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/blog' element={<BlogPostPage />}>
        <Route path="/blog/:id" element={<DetailPost/> }></Route>
      </Route>
    </Routes>
  );
}

export default App;
