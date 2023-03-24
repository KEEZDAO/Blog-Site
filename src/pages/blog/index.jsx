// src/pages/blog/index.jsx

import BlogList from '../../components/BlogList';
import { getPosts } from '../../lib/posts';

const BlogPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Landon's Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
