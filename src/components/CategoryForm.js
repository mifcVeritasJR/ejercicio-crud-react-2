import React, { useState } from 'react';
import { Alert } from 'react-alert';
import axios from 'axios';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/categories', {
        name,
        image,
      });
      console.log(response.data);
      alert.show('Categoría creada con éxito!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Imagen:</label>
        <input type="text" className="form-control" value={image} onChange={(event) => setImage(event.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Crear categoría</button>
      {error && <div className="alert alert-danger">{error}</div>}
    </form>
  );
};

export default CategoryForm;