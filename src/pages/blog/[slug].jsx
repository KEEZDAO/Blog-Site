// src/pages/blog/[slug].jsx

import { useRouter } from 'next/router';
import { getPostBySlug, getAllSlugs } from '../../lib/posts';

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-8" />
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default BlogPost;
