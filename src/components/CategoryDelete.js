import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryDelete = ({ id }) => {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`);
      console.log(response.data);
      alert.show('Categoría eliminada con éxito!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">Eliminar categoría</button>
  );
};

export default CategoryDelete;