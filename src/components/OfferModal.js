import React from 'react';
import Box from '@mui/material/Box';
import moment from 'moment';

const OfferModal = ({ rideRequest, updateStatus }) => {
  console.log('🚀 ~ file: OfferModal.js ~ line 5 ~ OfferModal ~ rideRequest', rideRequest);
  return (
    <div className="offer-flex-container">
      <div className="offer-title">Offre pour votre trajet</div>
      <div className="offer-text-container">
        <div className="offer-text-primary">
          {parseFloat(rideRequest.distance).toFixed(2)} km - Env.{' '}
          {moment(rideRequest.rideTime, 'HH:mm:ss').format('HH [hours] MM [minutes]')} de service
        </div>
        <div className="offer-text-seconsdary">{rideRequest.price}€ </div>
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <button
          color="inherit"
          onClick={() => updateStatus(rideRequest._id, 'rejected')}
          sx={{ mr: 1 }}
          className="btn_caneel"
          type="button"
        >
          Déclin
        </button>
        <button
          onClick={() => updateStatus(rideRequest._id, 'accepted')}
          className="btn-next"
          type="button"
        >
          J'accepte
        </button>
      </Box>
    </div>
  );
};

export default OfferModal;
