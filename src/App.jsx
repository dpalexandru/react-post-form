import { useState } from 'react'
import axios from 'axios'
import { Form, Button } from "react-bootstrap";

const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"


function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, formData)
      .then(res => {
        console.log("Risposta API:", res.data);
      });
  };


  return (
    <>
      <div className="container">
        <h1>Enter a new post</h1>
        <Form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control name="author" type="text" placeholder="Author name" value={formData.author}
              onChange={handleChange} />
          </Form.Group>

          {/* Campo titolo */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="Title" value={formData.title}
              onChange={handleChange} />
          </Form.Group>

          {/* Campo Body */}
          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              name="body"
              as="textarea"
              rows={5}
              placeholder="Enter your text here..."
              value={formData.body}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Checkbox */}
          <Form.Group className="mb-3">
            <Form.Check name="public" type="checkbox" label="Pubblic" checked={formData.public}
              onChange={handleChange} />
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
