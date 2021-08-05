import React, { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";

const FormularioAdd = ({ contactos = [], dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });
  const [modalShow, setModalShow] = useState(false);

  const obtenerid = () => {
    const contactos2 = localStorage.getItem("contactos");

    return contactos.length !== 0
      ? JSON.parse(contactos2)[JSON.parse(contactos2).length - 1].id + 1
      : 1;
  };

  const [maxid, setMaxid] = useState(obtenerid);
  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: maxid,
      nombre,
      numero,
    },
  };
  const handleAdd = () => {
    if (numero !== "") {
      setMaxid(maxid + 1);
      dispatch(actionAdd);
      setData({ nombre: "", numero: "" });
    } else {
      setModalShow(true);
    }
  };

  return (
    <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre: </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="nombre"
              pattern="[a-zA-Z0-9]{3}[a-zA-Z0-9]*"
              value={nombre}
              placeholder="Ingrese un nombre..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numero: </Form.Label>
            <Form.Control
              onChange={handleChange}
              name="numero"
              type="number"
              value={numero}
              className="phone validate"
              maxlength="11"
              placeholder="Ej. 362-4998877 o 3624998877"
            />
          </Form.Group>
          <Button
            className="btn btn-info mt-2 mx-1 d-grid gap-2 form-control"
            variant="primary"
            onClick={handleAdd}
          >
            Agregar
          </Button>
          <Modal
            size="sm"
            show={modalShow}
            onHide={() => setModalShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Datos Invalidos!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Alert variant="danger">No puede ingresar un numero vacio!</Alert>
            </Modal.Body>
          </Modal>
        </Form>
      </div>
    </>
  );
};

export default FormularioAdd;
