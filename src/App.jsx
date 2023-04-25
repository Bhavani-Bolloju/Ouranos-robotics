import React from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import BlogPostPage from './pages/BlogPostPage';
import DetailPost from './components/blogs/DetailPost';


function App() {
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
