import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import Home from './components/Home';
import DialogAddRecipe from './components/DialogAddRecipe'; // Verifica la ruta aquí
import { useAuth } from './Context/AuthContext';
import Navigation from './components/Navigation';
import About from './components/About'; // Asegúrate de importar About
// primereact
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => {
  const [dialogAddRecipe, setDialogAddRecipe] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <Fragment>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/Registro" element={<Register />} />
          <Route path="/Inicio-sesion" element={<Login />} />
          <Route path="/" element={<Home setDialogAddRecipe={setDialogAddRecipe} />} />
          {isAuthenticated && <Route path="/mis-recetas" element={<RecipeList />} />}
          <Route path="/SobreNosotros" element={<About />} />
        </Routes>
      </Router>
      <DialogAddRecipe dialogAddRecipe={dialogAddRecipe} setDialogAddRecipe={setDialogAddRecipe} />
    </Fragment>
  );
};

export default App;
