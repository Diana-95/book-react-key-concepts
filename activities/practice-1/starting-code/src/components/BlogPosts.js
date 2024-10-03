import classes from './BlogPosts.module.css';

function BlogPosts(props) {
  const jsxPosts = props.blogPosts.map((item) => {
    return <li key={item.id}>{item.title}</li>
  });
  return <ul classes={classes.list}>
    {jsxPosts}
  </ul>;
}

export default BlogPosts;
