import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ data, ch }) => {
    const [rech, setRech] = useState("");
    const [sel, setSel] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4); // 4 éléments par page

    const cat = [...new Set(data.map((e) => e.category))];

    function rechercher(e) {
        setRech(e.target.value);
        setCurrentPage(1); // Reset à la première page lors d'une nouvelle recherche
    }

    const f = data.filter((e) => {
        const matchesSearch = rech ? e.titre.toLowerCase().includes(rech.toLowerCase()) : true;
        const matchesCategory = sel ? e.category === sel : true;
        return matchesSearch && matchesCategory;
    });

    // Calcul des index pour la pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = f.slice(indexOfFirstItem, indexOfLastItem);

    // Changement de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    function ajt(e) {
        ch(e.id, e.titre, e.description, e.prix);
    }

    return (
        <div>
            <div>
                <select className="cat" onChange={(e) => setSel(e.target.value)}>
                    <option value={""}>Toutes les catégories</option>
                    {cat.map((e, i) => (
                        <option value={e} key={i}>
                            {e}
                        </option>
                    ))}
                </select>
            </div>
            <div className="find">
                <input
                    type="text"
                    placeholder="Rechercher"
                    value={rech}
                    onChange={rechercher}
                    className="rch"
                />
                <span className="br">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </span>
            </div>
            <div className="pro">
                {currentItems.map((e, i) => (
                    <div key={i}>
                        <Link to={`/Home/${e.id}`}>
                            <img src={e.image} alt={e.titre} />
                        </Link>
                        <div className="jj">
                            <h3>{e.titre} ⭐</h3>
                            <p>{e.description}</p>
                            <h4>{e.prix} $</h4>
                            <h4>Like : {e.like}</h4>
                        </div>
                        <div className="q">
                            <button className="pay" onClick={() => ajt(e)}>
                                Ajouter
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
    {Array.from({ length: Math.ceil(f.length / itemsPerPage) }, (_, i) => (
        <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
        >
            {i + 1}
        </button>
    ))}
</div>
        </div>
    );
};

export default Home;