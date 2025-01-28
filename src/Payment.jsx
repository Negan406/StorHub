import React, { useState } from 'react';
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';

const Payment = ({valider}) => {
const nav=useNavigate()
const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    cin: '',
    ville: '',
    adresse: '',
    telephone: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    valider(parseInt(id));
    nav("/p")
  };

  return (
    <>
    <h1 className='hh'>Payment</h1>
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nom..."
          pattern="[A-Za-zÀ-ÿ]+"
          title="Only letters are allowed"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="prenom">Prenom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          placeholder="Prenom..."
          pattern="[A-Za-zÀ-ÿ]+"
          title="Only letters are allowed"
          value={formData.prenom}
          onChange={handleChange}
          required
        />

        <label htmlFor="cin">Cin :</label>
        <input
          type="text"
          id="cin"
          name="cin"
          placeholder="Cin..."
          pattern="[A-Za-z0-9]+"
          title="Only alphanumeric characters are allowed"
          value={formData.cin}
          onChange={handleChange}
          required
        />

        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          placeholder="Ville..."
          pattern="[A-Za-zÀ-ÿ ]+"
          title="Only letters and spaces are allowed"
          value={formData.ville}
          onChange={handleChange}
          required
        />

        <label htmlFor="adresse">Adresse :</label>
        <input
          type="text"
          id="adresse"
          name="adresse"
          placeholder="Adresse..."
          pattern=".{5,}"
          title="Address should be at least 5 characters long"
          value={formData.adresse}
          onChange={handleChange}
          required
        />

        <label htmlFor="telephone">Telephone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="+..."
          pattern="^\+?\d{1,4}[\s.-]?\(?\d*\)?[\s.-]?\d+"
          title="Please enter a valid phone number"
          value={formData.telephone}
          onChange={handleChange}
          required
        />

        <label htmlFor="card-name">Cardholder Name:</label>
        <input
          type="text"
          id="card-name"
          name="cardName"
          placeholder="Cardholder Name"
          pattern="[A-Za-zÀ-ÿ ]+"
          title="Only letters and spaces are allowed"
          value={formData.cardName}
          onChange={handleChange}
          required
        />

        <label htmlFor="card-number">Card Number:</label>
        <input
          type="text"
          id="card-number"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          pattern="\d{4} \d{4} \d{4} \d{4}"
          title="Enter a valid card number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="expiry-date">Expiration Date:</label>
        <input
          type="month"
          id="expiry-date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          placeholder="123"
          pattern="\d{3}"
          title="Enter a valid 3-digit CVV"
          value={formData.cvv}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Payment;
