// src/components/BlogList.jsx

import Link from 'next/link';

const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug} passHref>
          <span className="rounded-lg overflow-hidden shadow-md hover:shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
