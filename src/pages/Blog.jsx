import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import blogPostsData from '../data/blogPosts.json';
import './Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'RV Life', 'National Parks & State Parks', 'Southeast US', 'RV Life Tips', 'Product Reviews & Tips', 'Travel & Food', 'Travel Adventures'];

  const extractFilename = (url) => {
    if (!url) return '';
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  const blogPosts = blogPostsData.posts.map(post => ({
    title: post.title,
    excerpt: post.excerpt,
    image: `/${extractFilename(post.featured_image)}`,
    category: post.category,
    slug: post.slug
  }));

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1>RV Life Adventures</h1>
          <p>Stories, tips, and inspiration from life on the road</p>
        </div>
      </section>

      <section className="blog-filters section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category, index) => (
              <button
                key={index}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-list section">
        <div className="container">
          <div className="results-count">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          </div>
          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
