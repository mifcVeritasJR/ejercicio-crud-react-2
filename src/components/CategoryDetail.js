import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryDetail = ({ id }) => {
  const [category, setCategory] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`);
        setCategory(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCategory();
  }, [id]);

  return (
    <div>
      <h2>{category.name}</h2>
      <img src={category.image} alt={category.name} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default CategoryDetail;