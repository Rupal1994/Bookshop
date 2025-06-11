import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { blogPosts } from '../../blogPost';
import { Link } from 'react-router-dom';
import './Blog.css';

export default function Blog() {
  return (
    <section className="blog-section py-5 mt-5">
      <Container>
        <h2 className="text-center blog-title mb-5 pt-2">📚 Pustak Blog</h2>
        <Row>
          {blogPosts.map(post => (
            <Col key={post.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow blog-card">
                <Card.Img variant="top" src={post.image} className="blog-card-img" />
                <Card.Body>
                  <Card.Title className="fs-5">{post.title}</Card.Title>
                  <Card.Text className="text-muted small mb-1">
                    {post.date} · by {post.author}
                  </Card.Text>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <Link to={`/blog/${post.id}`} className="btn btn-outline-warning btn-sm">
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
