// En tu componente RecipeItem, puedes aplicar estilos en línea
import React, { useContext } from 'react';
import { RecipeContext } from '../Context/RecipeContext';

const RecipeItem = ({ recipe }) => {
    const { deleteRecipe } = useContext(RecipeContext);

    return (
        <li style={{ backgroundColor: '#fff4e6', border: '1px solid #e1b12c', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
            <h3 style={{ color: '#333' }}>{recipe.name}</h3>
            <p style={{ color: '#555' }}>{recipe.description}</p>
            <button style={{ backgroundColor: '#e1b12c', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => deleteRecipe(recipe)}>
                Eliminar
            </button>
        </li>
    );
};

export default RecipeItem;
