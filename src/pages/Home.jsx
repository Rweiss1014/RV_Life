import BlogCard from '../components/BlogCard';
import EmailSubscribe from '../components/EmailSubscribe';
import './Home.css';

function Home() {
  const featuredPosts = [
    {
      title: "My Bourbon Trail Adventure: A Long Weekend in Kentucky",
      excerpt: "Explore Kentucky's Bourbon Trail with detailed distillery reviews, tasting tips, RV parking advice & travel costs. Discover what I learned about bourbon production and food pairing secrets that transformed how I taste whiskey.",
      image: "/QAk5cI30BwXEquJhDLBl8hKMnl9nxNVAANvZ1QMt.png",
      category: "Travel"
    },
    {
      title: "My 6-Week Solo RV Adventure Through the Florida Keys",
      excerpt: "The Florida Keys are the trip of a lifetime, but nobody tells you what it's really like to RV there for an extended period. Cruising down the Overseas Highway with the Atlantic on one side and the Gulf on the other is pure magic.",
      image: "/SZ5L1x7qS51PM6XN1arZAilNBSF3D9ETuJF4iuqA.jpg",
      category: "RV Life"
    },
    {
      title: "Mammoth Cave National Park: My Underground Adventure",
      excerpt: "Discover why Mammoth Cave National Park in Kentucky should be your next must-visit destination. After exploring the world's longest cave system, I can tell you this UNESCO World Heritage Site delivers adventures you won't find anywhere else.",
      image: "/z8li36tKd2eYJWxJ4i0j07NRMjctGVu5YsK3yVae.jpg",
      category: "Adventure"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1>Making My Own Lane</h1>
            <p className="hero-subtitle">Solo Female Full-Time RV Living Adventures</p>
            <p className="hero-description">
              Follow my journey as I explore America's backroads, national parks, and hidden gems in my Class C RV.
              From bourbon trails to underground caves, join me for authentic travel stories and practical RV living tips.
            </p>
            <div className="hero-buttons">
              <a href="#blog" className="btn btn-primary">Explore My Adventures</a>
              <a href="/contact" className="btn btn-outline">Work With Me</a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/RTPG0qXRBmJvKtV6BrU4SYsaBtxPkyK2qYdEcoEp.png" alt="Nancy Carter" />
            </div>
            <div className="about-text">
              <h2>Hi, I'm Nancy</h2>
              <p>
                I'm a solo female traveler living full-time in my Class C RV, exploring the incredible diversity
                of America one mile at a time. After years of dreaming about the open road, I finally took the leap
                and haven't looked back.
              </p>
              <p>
                My mission is to inspire others to pursue their travel dreams while sharing practical tips, honest
                reviews, and real experiences from life on the road. Whether you're considering RV life or just love
                armchair travel, I'm glad you're here.
              </p>
              <a href="/media-kit-nancy-carter" className="btn btn-primary">Learn More About Me</a>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="featured-posts section">
        <div className="container">
          <div className="section-header">
            <h2>Recent Adventures</h2>
            <p>Explore my latest travels, tips, and stories from the road</p>
          </div>
          <div className="blog-grid">
            {featuredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          <div className="section-footer">
            <a href="/blogsolofemalervliving" className="btn btn-outline">View All Posts</a>
          </div>
        </div>
      </section>

      <EmailSubscribe />

      <section className="shop-section section">
        <div className="container">
          <div className="shop-content">
            <h2>My Favorite RV Essentials</h2>
            <p>
              Whether you're just getting started or a camping pro, check out some of my favorite things
              that make RV adventures more memorable and enjoyable!
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
