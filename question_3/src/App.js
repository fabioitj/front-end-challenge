import React from 'react';
import './App.css';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">Header</header>
      
      <div className="content-columns">
        <div className="left-column">
          <section className="hero">Hero</section>
          <aside className="sidebar">Sidebar</aside>
        </div>
        <div className="right-column">
          <main className="main-content">
            Main Content
          </main>
          <section className="extra-content">Extra Content</section>
        </div>
      </div>

      <div className="related-row">
        <section className="related-images">Related Images</section>
        <section className="related-posts">Related Posts</section>
      </div>
      
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;
