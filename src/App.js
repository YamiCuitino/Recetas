import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import Home from './components/Home';
import DialogAddRecipe from './components/DialogAddRecipe';
import { AuthProvider } from './Context/AuthContext';
import { useAuth } from './Context/AuthContext';
import RecipeProvider from './Context/RecipeContext';
import Navigation from './components/Navigation';
import About from './components/About'; 
// primereact
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';

const App = () => {
  const [dialogAddRecipe, setDialogAddRecipe] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <RecipeProvider> {/* Añadido RecipeProvider */}
        <Router>
          <div className="App">
            <Navigation />
            <Routes>
              <Route path="/Registro" element={<Register />} />
              <Route path="/Inicio-sesion" element={<Login />} />
              <Route path="/" element={<Home />} />
              {/* {isAuthenticated && <Route path="/mis-recetas" element={<RecipeList />} />} */}
              <Route path="/mis-recetas" element={<RecipeList />} />
              <Route path="/SobreNosotros" element={<About />} />
            </Routes>
          </div>
        </Router>

        <DialogAddRecipe dialogAddRecipe={dialogAddRecipe} setDialogAddRecipe={setDialogAddRecipe} />
      </RecipeProvider>
    </AuthProvider>
  );
};

export default App;