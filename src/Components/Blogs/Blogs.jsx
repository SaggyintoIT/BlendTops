import React from 'react';


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Websites for Web Design Inspiration in 2025",
      image: "https://blentops-web.inddev.in/wp-content/images/blog_1.jpg",
      tag: "Software Development",
      readTime: "13 mins read",
      author: "Aman Singh",
      date: "April 21, 2025"
    },
    {
      id: 2,
      title: "How Much Does It Cost To Design A Logo?",
      image: "https://blentops-web.inddev.in/wp-content/images/blog_2.jpg",
      tag: "Software Development",
      readTime: "13 mins read",
      author: "Aman Singh",
      date: "April 21, 2025"
    },
    {
      id: 3,
      title: "10 Examples of Websites with Their Names and Types",
      image: "https://blentops-web.inddev.in/wp-content/images/blog_3.jpg",
      tag: "Software Development",
      readTime: "13 mins read",
      author: "Aman Singh",
      date: "April 21, 2025"
    },
    {
      id: 4,
      title: "10 Best Websites for Web Design Inspiration in 2025",
      image: "https://blentops-web.inddev.in/wp-content/images/blog_4.jpg",
      tag: "Software Development",
      readTime: "13 mins read",
      author: "Aman Singh",
      date: "April 21, 2025"
    },
    {
      id: 5,
      title: "How Much Does It Cost To Design A Logo?",
      image: "https://blentops-web.inddev.in/wp-content/images/blog_5.jpg",
      tag: "Software Development",
      readTime: "13 mins read",
      author: "Aman Singh",
      date: "April 21, 2025"
    },
    {
      id: 6,
      title: "10 Examples of Websites with Their Names and Types",
      image: "https://blentops-web.inddev.in/wp-content/images/blog_6.jpg",
      tag: "Software Development",
      readTime: "13 mins read",
      author: "Aman Singh",
      date: "April 21, 2025"
    }
  ];

  return (
    <div className="blog-page">
      <div className="page-header text-center py-100">
        <h1 className="innerpages">Blog</h1>
        <h2 className="innersubheading mb-0">The Mindful Blogs</h2>
      </div>

      <div className="blog-container pt-30">
        <section className="blog-section">
          {blogPosts.map(post => (
            <div className="blogcard" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div className="blogcard-content">
                <div className="tags">
                  <div className="tag">{post.tag}</div>
                  <div className="read-time">{post.readTime}</div>
                </div>
                <h3>
                  <a className="text-white underline" href="blog-details.html">
                    {post.title}
                  </a>
                </h3>
                <div className="author bor-top">
                  <div className="imgicon">
                    <img src="https://blentops-web.inddev.in/wp-content/images/aman.svg" alt={post.author} />
                  </div>
                  <div className="pr-auto"><p>{post.author}</p></div>
                  <div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="load-more-button buttoncenter pb-5">
          <a href="#" className="mainbutton read">
            <div className="mainbutton-txt">Load More</div>
            <div className="button-iconwrapper">
              <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-icon"></i>
              <i aria-hidden="true" className="mancsstheme- mancss-theme-arrow-right-top button-iconseccondary"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;