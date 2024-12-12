import React from 'react';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import CategoryEdit from './components/CategoryEdit';
import CategoryDelete from './components/CategoryDelete';

const App = () => {
  return (
    <div className="container">
      <h1>CRUD de Categorías</h1>
      <CategoryForm />
      <CategoryList />
      <CategoryDetail id={1} />
      <CategoryEdit id={1} />
      <CategoryDelete id={1} />
    </div>
  );
};

export default App;