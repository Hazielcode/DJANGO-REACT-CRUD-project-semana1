import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editItem, setEditItem] = useState(null);

  // 🚀 Cargar los items al iniciar
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/items/")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("Error al obtener items:", err));
  }, []);

  // ➕ Crear Item
  const addItem = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/items/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description })
    })
      .then(res => res.json())
      .then(newItem => {
        setItems([...items, newItem]);
        setName("");
        setDescription("");
      })
      .catch(err => console.error("Error en POST:", err));
  };

  // ✏️ Editar Item
  const updateItem = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/items/${editItem.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description })
    })
      .then(res => res.json())
      .then(updated => {
        setItems(items.map(item => (item.id === updated.id ? updated : item)));
        setEditItem(null);
        setName("");
        setDescription("");
      })
      .catch(err => console.error("Error en PUT:", err));
  };

  // ❌ Eliminar Item
  const deleteItem = (id) => {
    fetch(`http://127.0.0.1:8000/api/items/${id}/`, {
      method: "DELETE"
    })
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(err => console.error("Error en DELETE:", err));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">📦 CRUD de Items</h1>

      {/* Formulario */}
      <form onSubmit={editItem ? updateItem : addItem} className="mb-4">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-success w-100">
              {editItem ? "Actualizar" : "Agregar"}
            </button>
          </div>
        </div>
      </form>

      {/* Tabla de Items */}
      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td className="text-center">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setEditItem(item);
                      setName(item.name);
                      setDescription(item.description);
                    }}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteItem(item.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-muted">
                No hay items todavía...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
