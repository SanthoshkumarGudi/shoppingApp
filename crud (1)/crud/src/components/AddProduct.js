import Form from "react-bootstrap/Form";

const AddProduct = ({ onChange }) => {

  return (
    <>
      <Form.Label htmlFor="title">Title</Form.Label>
      <Form.Control
        name="title"
        type="text"
        id="title"
       
        onChange={(e) => onChange(e)}
      />
      <Form.Label htmlFor="title">Price</Form.Label>
      <Form.Control
        name="price"
        type="number"
        id="price"
       
        onChange={(e) => onChange(e)}
      />
      <Form.Label htmlFor="title">Category</Form.Label>
      <Form.Control
        name="category"
        type="text"
        id="category"
       
        onChange={(e) => onChange(e)}
      />
      <Form.Label htmlFor="title">Rate</Form.Label>
      <Form.Control
        name="rate"
        type="number"
        id="rate"
       
        onChange={(e) => onChange(e)}
      />
      <Form.Label htmlFor="title">Count</Form.Label>
      <Form.Control
        name="count"
        type="number"
        id="count"
        onChange={(e) => onChange(e)}
      />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" as="textarea" rows={3} onChange={(e) => onChange(e)}/>
      </Form.Group>
    </>
  );
};

export default AddProduct;
