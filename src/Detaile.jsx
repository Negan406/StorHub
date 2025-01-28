import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from './Data';
import "./App.css";

const Detaile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Trouver le produit actuel
    const productIndex = data.findIndex((i) => i.id === parseInt(id));
    const product = data[productIndex];

    // Gestion des likes
    const [likes, setLikes] = useState(product.like || 0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    // Navigation entre les produits
    const goToNextProduct = () => {
        const nextIndex = (productIndex + 1) % data.length; // Revenir au début si on dépasse
        navigate(`/Home/${data[nextIndex].id}`); // Rediriger vers le produit suivant
    };

    const goToPrevProduct = () => {
        const prevIndex = (productIndex - 1 + data.length) % data.length; // Revenir à la fin si on dépasse
        navigate(`/Home/${data[prevIndex].id}`); // Rediriger vers le produit précédent
    };

    if (!product) {
        return <p>Item not found</p>;
    }

    return (
        <div className='detail'>
            <div className='de2'>
                {/* Conteneur pour l'image et les boutons de navigation */}
                <div className='image-container'>
                    <button onClick={goToPrevProduct} className='nav-button'>◀️</button>
                    <img className='im2' src={`../${product.image}`} alt={product.titre} />
                    <button onClick={goToNextProduct} className='nav-button'>▶️</button>
                </div>

                {/* Informations sur l'élément */}
                <h3 className='ee'>{product.titre}</h3>
                <p className='ee'>{product.description}</p>
                <h4 className='ee'>{product.prix} $</h4>

                {/* Boutons Like/Dislike */}
                <button onClick={handleLike} className='pay1'>❤️ {likes}</button>
                <button className='pay2'>👎</button>
            </div>
        </div>
    );
};

export default Detaile;