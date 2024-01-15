import Form from "react-bootstrap/Form";
const EditProduct = ({ onChangeEdit, edit }) => {
  return (
    <>
      <Form.Label htmlFor="title">Title</Form.Label>
      <Form.Control
        name="title"
        type="text"
        id="title"
        value={edit.title}
        onChange={(e) => onChangeEdit(e)}
      />
      <Form.Label htmlFor="title">Price</Form.Label>
      <Form.Control
        name="price"
        type="number"
        id="price"
        value={edit.price}
        onChange={(e) => onChangeEdit(e)}
      />
      <Form.Label htmlFor="title">Category</Form.Label>
      <Form.Control
        name="category"
        type="text"
        id="category"
        value={edit.category}
        onChange={(e) => onChangeEdit(e)}
      />
      <Form.Label htmlFor="title">Rate</Form.Label>
      <Form.Control
        name="rate"
        type="number"
        id="rate"
        value={edit.rating.rate}
        onChange={(e) => onChangeEdit(e)}
      />
      <Form.Label htmlFor="title">Count</Form.Label>
      <Form.Control
        name="count"
        type="number"
        id="count"
        value={edit.rating.count}
        onChange={(e) => onChangeEdit(e)}
      />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          onChange={(e) => onChangeEdit(e)}
          value={edit.description}
        />
      </Form.Group>
    </>
  );
};

export default EditProduct;
