import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryEdit = ({ id }) => {
  const [category, setCategory] = useState({});
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`);
        setCategory(response.data);
        setName(response.data.name);
        setImage(response.data.image);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCategory();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        name,
        image,
      });
      console.log(response.data);
      alert.show('Categoría actualizada con éxito!');
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
      <button type="submit" className="btn btn-primary">Actualizar categoría</button>
      {error && <div className="alert alert-danger">{error}</div>}
    </form>
  );
};

export default CategoryEdit;