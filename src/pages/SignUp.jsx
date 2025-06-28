import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = users.some((u) => u.email === user.email);
    if (emailExists) {
      alert('Email already registered!');
      return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful!');
    navigate('/login');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '30rem', padding: '2rem', boxShadow: '0 0 10px #ccc' }}>
        <h3 className="text-center mb-4">Create Account</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="name" required onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" required onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" name="password" required onChange={handleChange} />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Card>
    </Container>
  );
}
