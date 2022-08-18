import React from 'react';
import Demander from '../assets/Demander.png';
import { useHistory } from 'react-router-dom';

const Success = () => {
  const history = useHistory();

  return (
    <div className="success-container">
      <div className="success-container2">
        <img src={Demander} className="success-img" />
        <div className="success-text-container">
          <div className="success-text-primary">Merci pour votre collaboration</div>
          <div className="success-text-secondary">Kidcab vous contactera bientôt</div>
        </div>
        <div className="bottom-container">
          <button
            className="btn-next"
            type="button"
            onClick={() => history.push('/')}
            style={{ fontSize: 20, padding: '15px 60px' }}
          >
            Retourner à la page d’Accueil
          </button>
          <div className="success-text" onClick={() => history.push('/')}>
            Vous souhaitez obtenir une estimation pour un autre trajet ?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
