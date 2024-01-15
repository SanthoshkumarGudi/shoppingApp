import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({})
  const [filterProducts, setFilterProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [showEdit, setShowEdit] = useState(false)
  const [edit, setEdit] = useState({})
  const handleClose = () => setShow(false);
  const handleEditClose = () => setShowEdit(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getDetails();
  }, []); 
  

  const onChange = (e) =>{
    setNewProduct({...newProduct,[e.target.name]:e.target.value})
  }
  const onChangeEdit = (e) =>{
    setEdit({...edit,[e.target.name]:e.target.value})
  }
  const onSubmit = () =>{
    const newProd={
      id : products.length+1,
      title:newProduct.title,
      price:newProduct.price,
      category:newProduct.category,
      rating:{rate:newProduct.rate,count:newProduct.count},
      description:newProduct.description
    }
    setFilterProducts(oldArray => [...oldArray, newProd]);
    setProducts(oldArray => [...oldArray, newProd]);
    handleClose()
    
  }

 const onSubmitEdit = () =>{
  const newProd={
    id : edit.id,
    title:edit.title,
    price:edit.price,
    category:edit.category,
    rating:{rate:edit.rate,count:edit.count},
    description:edit.description
  }
  const newArray = products.map((item)=>{
    if (item.id===newProd.id)
       {
              return newProd
       }
    return item   
  })
  setFilterProducts(newArray);
  setProducts(newArray);
  handleEditClose()
 }

  const getDetails = async () => {
    setOpen(true);
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => {
        setOpen(false);
        setProducts(json);
        setFilterProducts(json);
      });
  };
  function handleSearchClick(searchVal) {
    setSearch(searchVal);
    if (searchVal === "") {
      setFilterProducts(products);
      return;
    }
    const filterBySearch = products.filter((item) => {
      return item.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    setFilterProducts(filterBySearch);
  }

const onClick = (data) =>{
  const newProd = filterProducts.filter((d)=>{
          return data.id !== d.id
  })
  setFilterProducts(newProd);
  setProducts(newProd);
}  

const onEdit = (editData) =>{
  setEdit(editData)
  setShowEdit(true)
}

  return (
    <div className="App" justify="space-between">
      {console.log(products)
      }
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>
      <Form.Control
        type="product"
        id="product"
        value={search}
        placeholder="search "
        aria-describedby="passwordHelpBlock"
        onChange={(e) => {
          handleSearchClick(e.target.value);
        }}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProduct onChange={onChange} onSubmit={onSubmit}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProduct onChangeEdit={onChangeEdit} edit={edit}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onSubmitEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
             
          </tr>
        </thead>
        <tbody>
          {open && <Spinner animation="border" variant="primary" />}
          {filterProducts.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.price}</td>
                <td>{data.category}</td>
                <td>
                  {data.rating["rate"]} {data.rating["count"]}
                </td>
                <td>{data.description}</td>
                <td><button onClick= {() => onEdit(data)}>Edit</button></td>
                <td><button onClick={()=>onClick(data)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
