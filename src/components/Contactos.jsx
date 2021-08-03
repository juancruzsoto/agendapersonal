import React, { useReducer } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

const contactos = [
  {
    id: "hbbs",
    nombre: "Raul",
    numero: "323232",
  },
  {
    id: "hbbss",
    nombre: "Raul",
    numero: "323232",
  },
  {
    id: "hbbsss",
    nombre: "Raul",
    numero: "323232",
  },
];
const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, contactos);
  return (
    <div className="container mt-3">
      <FormularioAdd dispatch={dispatch} />
      <TablaContactos contactos={state} />
    </div>
  );
};

export default Contactos;
