import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button } from "react-bootstrap";

const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"


function App() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    data.public = fd.has("public");
    axios.post(url, data)
      .then(res => {
        console.log("Risposta API:", res.data);
      })

  };

  return (
    <>
      <div className="container">
        <h1>Enter a new post</h1>
        <Form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control name="author" type="text" placeholder="Author name" />
          </Form.Group>

          {/* Campo titolo */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="Title" />
          </Form.Group>

          {/* Campo Body */}
          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              name="body"
              as="textarea"
              rows={5}
              placeholder="Enter your text here..."
            />
          </Form.Group>

          {/* Checkbox */}
          <Form.Group className="mb-3">
            <Form.Check name="public" type="checkbox" label="Pubblic" />
          </Form.Group>

          {/* Bottone Submit */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default App
