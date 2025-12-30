import BlogCard from '../components/BlogCard';
import EmailSubscribe from '../components/EmailSubscribe';
import blogPostsData from '../data/blogPosts.json';
import './Home.css';

function Home() {
  const extractFilename = (url) => {
    if (!url) return '';
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  const recentPosts = blogPostsData.posts.slice(0, 6).map(post => ({
    title: post.title,
    excerpt: post.excerpt,
    image: `/${extractFilename(post.featured_image)}`,
    category: post.category,
    slug: post.slug
  }));

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <span className="badge">Solo Female RV Adventures</span>
            <h1>Life on <span className="italic">Wheels</span></h1>
            <p className="hero-description">
              Follow my journey as I explore America in my RV, one mile at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15K+</div>
              <div className="stat-label">YouTube Subscribers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Blog Posts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">States Visited</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Miles Traveled</div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-content section">
        <div className="container">
          <div className="content-layout">
            <div className="main-column">
              <div className="section-header">
                <h2>From The Blog</h2>
              </div>
              <div className="posts-list">
                {recentPosts.map((post, index) => (
                  <article key={index} className="post-card">
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <span className="post-category">{post.category}</span>
                    </div>
                    <div className="post-content">
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <a href={`/blogsolofemalervliving#${post.slug}`} className="read-more">
                        Continue Reading →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
              <div className="section-footer">
                <a href="/blogsolofemalervliving" className="btn btn-primary">View All Posts</a>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <img src="/RTPG0qXRBmJvKtV6BrU4SYsaBtxPkyK2qYdEcoEp.png" alt="Nancy Carter" className="sidebar-image" />
                <h3>Why this RV lifestyle?</h3>
                <p>
                  "After years of dreaming about the open road, I finally took the leap into full-time RV living.
                  Now I'm exploring America's incredible diversity one mile at a time, sharing my adventures and
                  practical tips along the way."
                </p>
                <a href="/media-kit-nancy-carter" className="btn btn-outline">Learn More About Me</a>
              </div>

              <div className="sidebar-card">
                <h3>Join My Community</h3>
                <p>Follow along on YouTube for weekly RV adventures and travel vlogs.</p>
                <a
                  href="https://www.youtube.com/@MakingMyOwnLane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Subscribe on YouTube
                </a>
              </div>

              <div className="sidebar-card">
                <h3>RV Budget Worksheet</h3>
                <p>Planning to go full-time? Use my comprehensive budget worksheet to estimate your monthly costs.</p>
                <a href="/rv-budget-worksheet" className="btn btn-outline">Get The Worksheet</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <EmailSubscribe />

      <section className="shop-section section">
        <div className="container">
          <div className="shop-content">
            <h2>My Favorite RV Essentials</h2>
            <p>
              Check out the gear and products that make my RV adventures more comfortable and enjoyable!
            </p>
            <a
              href="https://www.amazon.com/shop/makingmyownlane"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Shop My Favorites
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
