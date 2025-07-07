
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookmarks, setBookmarks]= useState([]);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div>
        <Header></Header>
        <div className='flex mt-5 gap-5'>
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks bookmarks = {bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
