import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        setCategories(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <h2>{category.name}</h2>
          <img src={category.image} alt={category.name} />
        </li>
      ))}
      {error && <div className="alert alert-danger">{error}</div>}
    </ul>
  );
};

export default CategoryList;