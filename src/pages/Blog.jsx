import BlogCard from '../components/BlogCard';
import './Blog.css';

function Blog() {
  const categories = ['All', 'RV Life', 'Travel', 'East Coast', 'Mid West', 'Southeast US', 'Product Reviews', 'RV Life Tips'];

  const blogPosts = [
    {
      title: "My Bourbon Trail Adventure: A Long Weekend in Kentucky",
      excerpt: "Explore Kentucky's Bourbon Trail with detailed distillery reviews, tasting tips, RV parking advice & travel costs.",
      image: "/QAk5cI30BwXEquJhDLBl8hKMnl9nxNVAANvZ1QMt.png",
      category: "Travel"
    },
    {
      title: "My 6-Week Solo RV Adventure Through the Florida Keys",
      excerpt: "The Florida Keys are the trip of a lifetime, but nobody tells you what it's really like to RV there for an extended period.",
      image: "/SZ5L1x7qS51PM6XN1arZAilNBSF3D9ETuJF4iuqA.jpg",
      category: "Southeast US"
    },
    {
      title: "Mammoth Cave National Park: My Underground Adventure",
      excerpt: "Discover why Mammoth Cave National Park in Kentucky should be your next must-visit destination.",
      image: "/z8li36tKd2eYJWxJ4i0j07NRMjctGVu5YsK3yVae.jpg",
      category: "Travel"
    },
    {
      title: "3 Best Hikes in Sleeping Bear Dunes",
      excerpt: "Discover the most breathtaking hiking trails in Michigan's Sleeping Bear Dunes National Lakeshore.",
      image: "/xllSqmAGDPdTQlXkt4BZMwJrqSdyvtHZQM0GwAvv.png",
      category: "Mid West"
    },
    {
      title: "How Does Thousand Trails RV Membership Work?",
      excerpt: "Everything you need to know about the Thousand Trails membership program for RV travelers.",
      image: "/HgwuNtze7bsl2r7PViZERGhcYEnMPM27uzwo74Qv.png",
      category: "RV Life Tips"
    },
    {
      title: "6 Benefits of Living With Less",
      excerpt: "Discover how downsizing to RV life has simplified my world and brought unexpected joys.",
      image: "/4BOkQ5ZwQEtNfcnsBIfGYmew1GIi08Ld1zbEWM9U.png",
      category: "RV Life"
    },
    {
      title: "Exploring Pictured Rocks National Lakeshore",
      excerpt: "A complete guide to visiting one of Michigan's most stunning natural attractions.",
      image: "/9XrUGQajwWVq83T5I3sBIlWZMPuFjH7L5fK7oi4r.png",
      category: "Mid West"
    },
    {
      title: "Fort Wilkins Historic State Park",
      excerpt: "Step back in time at this beautifully preserved 1840s military outpost in Michigan's Upper Peninsula.",
      image: "/p0xx5Rxuem27AFP7BApburcQbdSkuIhgsURCfSj9.png",
      category: "East Coast"
    },
    {
      title: "Power Charging Station Review",
      excerpt: "My honest review of portable power stations for RV living and how they've changed my off-grid experience.",
      image: "/iRUPlnbHJzQN7yHygX9SaykrfsDuunVcHSZhIP12.png",
      category: "Product Reviews"
    }
  ];

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
              <button key={index} className={index === 0 ? 'active' : ''}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-list section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
