import React from 'react';
import RecipeProvider from './Context/RecipeContext';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <RecipeProvider>
      <h1>Gestor de Recetas de Cocina</h1>
      <RecipeForm />
      <RecipeList />
    </RecipeProvider>
  );
};

export default App;
