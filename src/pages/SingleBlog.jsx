import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../blogPost';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SingleBlog.css';

export default function SingleBlog() {
  const { id } = useParams();
  const blog = blogPosts.find(post => post.id === parseInt(id));

  if (!blog) {
    return (
      <Container className="py-5">
        <h2>Blog not found</h2>
        <Link to="/blog" className="btn btn-warning mt-3">Back to Blog</Link>
      </Container>
    );
  }

  return (
    <section className="single-blog py-5 mt-5">
      <Container>
        <Row className="mb-4 mt-3">
          <Col>
            <h4 className="single-blog-title">{blog.title}</h4>
            <p className="text-muted">{blog.date} · by {blog.author}</p>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <img src={blog.image} alt={blog.title} className="img-fluid rounded mb-4" />
            <p className="blog-full-text">
              {blog.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec et ultricies eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              In ac turpis nec metus suscipit laoreet. Nullam ac justo ut sapien blandit laoreet.
            </p>
            <Link to="/blog">
              <Button variant="outline-warning">← Back to Blog</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
