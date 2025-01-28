import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import Panier from './Panier'
import Ajouter from './Ajouter'
import {data,panierr,category} from "./Data"
import Detaile from './Detaile'
import { useState } from 'react'
import Payment from './Payment'
import { useEffect } from 'react'
const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    border: "none",
    borderRadius:"5px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    zIndex: 1000,
    textAlign: "center",
};
  const [error, setError] = useState("");
  const [i2, setI2] = useState(panierr);
  const [rch,setrch]=useState(data);
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  function ajtP(id,titre,description,prix) {
    const productExists = i2.find((item) => item.id === id);

    if (productExists) {
      setError("Erreur: le produit est déjà ajouté !");
    } else {
        setI2([...i2, { id: id, titre: titre, description: description, prix: prix }]);
        setError("");
    }
}
function supprimer(id){
  setI2(i2.filter((n)=>
      n.id!==id
   ))
}
function valider(id) { 
  setI2(i2.map((item) => item.id === id ? { ...item, paid: true } : item )); 
}
  return (
    <>
     <Header/>
     {error && (
                <div style={modalStyle}>
                    <p>{error}</p>
                    <button className='err' onClick={() => setError("")}>Fermer</button>
                </div>)}
                <button className="ssa" onClick={toggleTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16">
  <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
  <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
</svg>
          </button>
     <Routes>

      <Route path='/Home/:id' element={<Detaile  />} />
      <Route path='/Payment/:id' element={<Payment valider={valider}/>} />
        <Route path='/' element={<Home ch={ajtP} data={rch} cat={category}/>}/>
        <Route path='/p' element={<Panier items2={i2} supp={supprimer}/>}/>
        <Route path='/a' element={<Ajouter />}/>
     </Routes>
   
    </>
  )
}

export default App
