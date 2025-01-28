// Panier.js
import React, { useState } from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

const Panier = ({ items2, supp }) => {
  function sup(n) {
    supp(n.id);
  }

  const [Quantité, setQuantité] = useState({});

  function calculer(id, value) {
    setQuantité({
      ...Quantité,
      [id]: Number(value),
    });
  }
  

  return (
    <div>
      <br />
      <table className='tb' border={2}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items2.map((n, i) => (
            <tr key={i}>
              <td>{n.titre}</td>
              <td>{n.description}</td>
              <td>{(Quantité[n.id] || 1) * n.prix} $</td>
              <td>
                <select className='qua' value={Quantité[n.id] || 1} onChange={(e) =>
                  calculer(n.id, e.target.value)
                }>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </td>
              <td>
                {n.paid ? (
                  <p>Payment réussi</p>
                ) : (
                  <>
                    <Link to={`/Payment/${n.id}`}><button className='pay3'>Payer</button></Link>
                    <button className='btn' onClick={() => sup(n)}>Supprimer</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Panier;
