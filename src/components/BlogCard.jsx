import './BlogCard.css';

function BlogCard({ title, excerpt, image, category }) {
  return (
    <article className="blog-card">
      <div className="blog-card-image">
        <img src={image} alt={title} loading="lazy" />
        {category && <span className="blog-card-category">{category}</span>}
      </div>
      <div className="blog-card-content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <button className="blog-card-link">Continue Reading</button>
      </div>
    </article>
  );
}

export default BlogCard;
