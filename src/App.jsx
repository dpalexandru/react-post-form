import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button } from "react-bootstrap";






function App() {

  return (
    <>
      <div className="container">
        <h1>Enter a new post</h1>
        <Form>

          {/* Campo Nome */}
          <Form.Group className="mb-3" name="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author name" />
          </Form.Group>

          {/* Campo titolo */}
          <Form.Group className="mb-3" name="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          {/* Campo Body */}
          <Form.Group className="mb-3" controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your text here. . ."
            />
          </Form.Group>
          {/* Checkbox */}
          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check type="checkbox" label="Pubblic" />
          </Form.Group>

          {/* Bottone Submit */}
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div >
    </>
  )
}

export default App
