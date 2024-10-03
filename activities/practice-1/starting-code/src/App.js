import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';
import {useState} from 'react';
import { useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setPosts(json));
    }, []
  )

  return (
    <>

      <NewPost />
      <BlogPosts blogPosts={posts}/>
    </>
  );
}

export default App;
